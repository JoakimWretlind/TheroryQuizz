import { useState } from "react";
import { FilterButtons } from "../../components/filterButtons";
import { CardSection, MainWrapper, PageWrapper } from "./style";
import { allData } from "../../data/allData.json";
import ICategories from "../../components/interfaces/ICategories";
import { QuizzCard } from "../../components/quizzCard";

export const QuizzPage = () => {
  const [category, setCategory] = useState<string>("");

  const filteredProducts = allData?.filter((item) => {
    if (category.toLowerCase() === "") {
      return item;
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
            <h2>We are sorry, we can not find what you are looking for.</h2>
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
