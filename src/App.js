import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Intro from "./components/intro/intro.jsx";

import ParticleBackground from "./components/particleBackground";

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
      <ParticleBackground/>
      <GlobalStyles />
      <StyledApp>
        <button className="myButton" onClick={() => themeToggler()}>
          {theme === "light" ? "Lights Off" : "Lights On"}
        </button>
        <Intro />
      </StyledApp>
      
    </ThemeProvider>
  );
}

export default App;
