import React from "react"
import { ContextProviderComponent } from "../contexts/navContext"
import { GlobalStyle } from "../styles/GlobalStyle"
import NavComponent from "./navFolder/NavRoot"

const Layout = props => (
  <ContextProviderComponent>
    <GlobalStyle />
    <NavComponent />
    <main>{props.children}</main>
  </ContextProviderComponent>
)

export default Layout
