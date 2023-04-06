import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const PageWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 160rem;
  padding: 18rem 1rem 7rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    text-transform: uppercase;
    font-family: "Bebas Neue", cursive;
    font-size: 5rem;
  }
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    padding: 9rem 3rem 7rem 3rem;
  }
`;

export const CardSection = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 2rem;
  @media (min-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
  h2 {
    font-family: "Bebas Neue", cursive;
    text-align: center;
    font-size: 5rem;
    color: ${(props) => props.theme.black};
  }
`;
