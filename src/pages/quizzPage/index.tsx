import { useState } from "react";
import { FilterButtons } from "../../components/filterButtons";
import { CardSection, HeaderWrapper, MainWrapper, PageWrapper } from "./style";
import { allData } from "../../data/allData.json";
import ICategories from "../../components/interfaces/ICategories";
import { QuizzCard } from "../../components/quizzCard";

export const QuizzPage = () => {
  console.log(allData);
  const [category, setCategory] = useState<string>("");

  const filteredProducts = allData?.filter((item) => {
    if (category.toLowerCase() === "") {
      return null;
    } else if (item.category.toLowerCase().includes(category)) {
      return item;
    }
  });

  return (
    <MainWrapper>
      <PageWrapper>
        <h1>{category}</h1>
        <CardSection>
          {!filteredProducts?.length ? (
            <HeaderWrapper>
              <h2>Pick a category to get questions!</h2>
            </HeaderWrapper>
          ) : (
            filteredProducts?.map((product: ICategories) => {
              return (
                <div key={product.id}>
                  <QuizzCard {...product} />
                </div>
              );
            })
          )}
          <FilterButtons setCategory={setCategory} />
        </CardSection>
      </PageWrapper>
    </MainWrapper>
  );
};
