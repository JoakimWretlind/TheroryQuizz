import { GlobalStyle, quizzTheme } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { QuizzPage } from "./pages/quizzPage";

function App() {
  return (
    <>
      <ThemeProvider theme={quizzTheme}>
        <GlobalStyle />
        <QuizzPage />
      </ThemeProvider>
    </>
  );
}

export default App;
