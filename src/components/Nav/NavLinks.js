import React from "react"
import styled from "styled-components"
import NavLink from "../../styles/NavLink"
import NavSeparator from "../../styles/NavSeparator"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`

const NavLinks = () => (
  <Wrapper>
    <NavLink to="/">Work</NavLink>
    <NavSeparator />
    <NavLink to="/side-notes">Side-Notes</NavLink>
    <NavSeparator />
    <NavLink to="/about">About</NavLink>
    <NavSeparator />
  </Wrapper>
)

export default NavLinks
