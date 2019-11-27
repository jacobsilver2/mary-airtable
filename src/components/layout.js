import React from "react"
import Nav from "./Nav/Nav"
import { Wrapper, GlobalStyle } from "../styles/GlobalStyle"

const Layout = props => (
  <>
    <GlobalStyle />
    <Nav />
    <main>{props.children}</main>
  </>
)

export default Layout
