import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.bgWhite};
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    height: 8rem;
    padding: 0;
  }
`;

export const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3rem;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FilteredButton = styled.button`
  padding: 0.6rem 0.8rem;
  width: 14rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  margin: 0.5rem;
  font-family: "Bebas Neue", cursive;
  font-size: 2.2rem;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  transition: 0.25s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(0.1rem);
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
  }
  &.isActive {
    transform: translateY(0.1rem);
    background-color: ${(props) => props.theme.red};
  }
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    margin: 0.2rem;
  }
`;
