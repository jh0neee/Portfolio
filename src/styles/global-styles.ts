import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 16px;
    min-width: 375px;
  }
  a {
    cursor: pointer; text-decoration: none;
  }
`;
