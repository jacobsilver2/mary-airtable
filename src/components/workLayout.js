import React from "react"
import Nav from "./Nav"
import "./layout.css"

class workLayout extends React.Component {
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
        <main>{this.props.children}</main>
      </>
    )
  }
}

export default workLayout
