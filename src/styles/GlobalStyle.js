import { createGlobalStyle } from "styled-components"
import * as fonts from "../fonts/fonts"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'fertigo_proregular';
    src: url('${fonts.fertigoProRegular}') format('woff2');
    font-weight: normal;
    font-style: normal;

}

${
  "" /* @import url('https://fonts.googleapis.com/css?family=Bitter&display=swap'); */
}
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

html {
  box-sizing: border-box;
  font-size: 10px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body { 
  margin-top: 0;
  @media only screen and (max-width: 1599px) {
    margin-right: 0;
    margin-left: 0;
  }
    ${"" /* font-family: "fertigo_proregular"; */}
    font-family: 'Rubik', sans-serif;
   h2 {
    ${"" /* font-family: 'Bitter'; */}
    font-family: 'Rubik', sans-serif;
   } 
   p {
     ${"" /* font-family: "Bitter"; */}
     font-family: 'Rubik', sans-serif;
   }
}
`
