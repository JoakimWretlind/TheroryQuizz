import { createGlobalStyle } from "styled-components";

export const quizzTheme = {
  black: "#232223",
  grayLight: "#e1e0e3",
  red: "#860000",
  white: "#f1eeea",
  bgWhite: "#e7e5da",

  smallScreen: "620px",
};

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  background-color: #E7E5DA;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
    }

ul, li {
  list-style: none;
    }
`;
