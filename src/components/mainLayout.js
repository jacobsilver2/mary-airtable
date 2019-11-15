import React from "react"
import GridContainer from "../styles/GridContainer"
import Nav from "./Nav"

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
