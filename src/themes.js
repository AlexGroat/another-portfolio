import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  btnBackground: "#eee",
  
};

export const darkTheme = {
  body: "#121212",
  fontColor: "#fff",
  btnBackground: "#040404",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
  button {
    color: ${({theme}) => theme.fontColor};
    background-color: ${({theme}) => theme.btnBackground};
  }
`;