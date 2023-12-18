import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
*{
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    min-width: 375px;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;
