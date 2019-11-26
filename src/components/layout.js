import React from "react"
import Nav from "./Nav"
import { Wrapper, GlobalStyle } from "../styles/GlobalStyle"

const Layout = props => (
  <>
    <GlobalStyle />
    <Nav />
    <main>{props.children}</main>
  </>
)

// const Layout = props => (
//   <div className="container">
//     <Nav />
//     {props.children}
//   </div>
// )

export default Layout
