import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Intro from "./components/intro/intro";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;



function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button id="myButton" onClick={() => themeToggler()}>Lights Off</button>
        <Intro />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;