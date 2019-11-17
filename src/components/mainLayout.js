import React from "react"
import GridContainer from "../styles/GridContainer"
import Nav from "./Nav"
import { createGlobalStyle } from "styled-components"
import "typeface-rubik"
import rem from "../utility/rem"

const GlobalStyle = createGlobalStyle`
  h1 {

  }
  body {
    margin: 0;
    font-family: "Rubik";
    letter-spacing: ${rem(0.25)};
  }
`

class mainLayout extends React.Component {
  state = {
    isMobileNavFolded: true,
  }

  toggleMobileNav = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
    }))
  }

  onRouteChange = () => {
    this.setState({
      isMobileNavFolded: true,
    })
  }

  render() {
    const { isMobileNavFolded } = this.state
    return (
      <>
        <GlobalStyle />
        <Nav
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={this.toggleMobileNav}
        />
        <GridContainer>{this.props.children}</GridContainer>
      </>
    )
  }
}

export default mainLayout
