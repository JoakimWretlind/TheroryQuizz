import { Dispatch, SetStateAction, useState } from "react";
import { useSearchParams } from "react-router-dom";
import buttonData from "../../data/buttonData.json";
import { ButtonWrapper, FilteredButton, InnerWrapper } from "./style";

type ButtonProps = {
  id: number;
  title: string;
  path: string;
};

type CategoryProps = {
  setCategory: Dispatch<SetStateAction<string>>;
};

export const FilterButtons = ({ setCategory }: CategoryProps) => {
  const [isActive, setIsActive] = useState<SetStateAction<number>>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (path: string, index: number) => {
    setCategory(`${path}`);
    setSearchParams(`${path}`);
    setIsActive(index);
  };

  return (
    <ButtonWrapper>
      <InnerWrapper>
        {buttonData.map((btn: ButtonProps, index) => {
          const { id, title, path } = btn;
          return (
            <FilteredButton
              key={id}
              onClick={() => handleClick(path, index)}
              className={`${index === isActive && "isActive"}`}
            >
              {title}
            </FilteredButton>
          );
        })}
      </InnerWrapper>
    </ButtonWrapper>
  );
};
