import React from "react"
import NavComponent from "./navFolder/NavRoot"
import { Wrapper, GlobalStyle } from "../styles/GlobalStyle"

const Layout = props => (
  <>
    <GlobalStyle />
    <NavComponent />
    <main>{props.children}</main>
  </>
)

export default Layout
