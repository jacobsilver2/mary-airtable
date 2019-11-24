import React, { Component } from "react"
import { navigate } from "gatsby"
import { isAuthenticated } from "../utility/auth"

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    navigate("/")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute
