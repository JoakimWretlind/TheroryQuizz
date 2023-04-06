import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: 0.25s ease;
  transform: perspective(1000px) rotateY(var(--rotate-y, 0))
    translateY(var(--translate-y, 0));
  transition: 0.25s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(0.1rem);
    box-shadow: 0 0rem 0.1rem rgba(0, 0, 0, 0.2);
  }
  &.front,
  &.back {
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    padding: 1rem;
    backface-visibility: hidden;
  }
  &.flip {
    transform: rotateY(180deg);
  }
  &.front {
    background-color: ${(props) => props.theme.grayLight};
    color: ${(props) => props.theme.black};
    font-size: 1.6rem;
  }
  &.back {
    transform: rotateY(180deg);
    color: #fff;
    background-color: ${(props) => props.theme.black};
    font-size: 1.4rem;
  }
`;

export const P = styled.p`
  font-family: "Raleway", sans-serif;
`;
