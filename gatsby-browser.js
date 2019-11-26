import React from "react"
import NavStore from "./src/components/Nav/NavContext"
import { silentAuth } from "./src/utility/auth"

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <NavStore>
        <SessionCheck>{element}</SessionCheck>
      </NavStore>
    </>
  )
}
