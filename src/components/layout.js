import React from "react"
import { ContextProviderComponent } from "../contexts/navContext"
import { GlobalStyle } from "../styles/GlobalStyle"
import NavComponent from "./navFolder/NavRoot"
import styled from "styled-components"

const Wrapper = styled.div`
  /* max-width: 1600px; */
  width: 95%;
  margin: 0 auto;
`

const Layout = props => (
  <ContextProviderComponent>
    <GlobalStyle />
    <Wrapper>
      <NavComponent />
      <main>{props.children}</main>
    </Wrapper>
  </ContextProviderComponent>
)

export default Layout
