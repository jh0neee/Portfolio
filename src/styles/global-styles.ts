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
  textarea {
    padding-top: 1rem;
    padding-left: 1rem;
  }
  input:focus, textarea:focus {
    outline: none;
  }

  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF_HambakSnow';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'PuradakGentleGothicR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.1/PuradakGentleGothicR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  #__next {
    width: 100vw;
    height: 100vh;
  }
`;
