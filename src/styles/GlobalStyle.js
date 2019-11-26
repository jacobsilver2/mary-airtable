import styled, { createGlobalStyle } from "styled-components"
import * as fonts from "../fonts/fonts"
import rem from "../utility/rem"
export const Wrapper = styled.div`
  /* margin-left: 3rem;
  margin-right: 3rem; */
`

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'fertigo_proregular';
    src: url('${fonts.fertigoProRegular}') format('woff2');
    font-weight: normal;
    font-style: normal;

}
html {
  box-sizing: border-box;
  font-size: 10px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body { 
    font-family: "fertigo_proregular";
    ${
      "" /* padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 1;
    margin: 0;
    letter-spacing: ${rem(0.25)}; */
    }
}
`
