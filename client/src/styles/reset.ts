import {createGlobalStyle,css} from "styled-components"
import {vars} from "./vars";

export default createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    font-family: ${vars.font.primary};
    font-weight: normal;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
  }
`
