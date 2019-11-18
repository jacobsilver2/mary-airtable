import React from "react"
import { createGlobalStyle } from "styled-components"
import "typeface-rubik"
import rem from "../utility/rem"
import Nav from "./Nav"

const GlobalStyle = createGlobalStyle`
  h1 {

  }
  body {
    margin: 0;
    font-family: "Rubik";
    letter-spacing: ${rem(0.25)};
  }
`

class Layout extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Nav />
        {this.props.children}
      </>
    )
  }
}

export default Layout
