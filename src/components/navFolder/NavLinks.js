import React, { useContext } from "react"
import styled from "styled-components"
import NavLink from "../../styles/NavLink"
import NavSeparator from "../../styles/NavSeparator"
import ContextConsumer from "../../contexts/navContext"
import {
  StyledBehance,
  StyledLinkedIn,
  StyledInstagram,
} from "../../styles/StyledNavbar"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`

const NavLinks = () => {
  return (
    <ContextConsumer>
      {({ menuData, set }) => {
        return (
          <Wrapper>
            <NavLink
              onClick={() => {
                set({ menuOpen: false })
              }}
              to="/"
            >
              Work
            </NavLink>
            <NavSeparator />
            <NavLink
              onClick={() => {
                set({ menuOpen: false })
              }}
              to="/side-notes"
            >
              Side-Notes
            </NavLink>

            <NavSeparator />

            <NavLink
              onClick={() => {
                set({ menuOpen: false })
              }}
              to="/about"
            >
              About
            </NavLink>

            <NavSeparator />

            <a href="https://www.behance.net/MaryChoueiter">
              <StyledBehance fill="grey" />
            </a>
            <a href="https://www.instagram.com/tahhiyakaryoka/">
              <StyledLinkedIn fill="grey" />
            </a>
            <a href="https://www.linkedin.com/in/marychoueiter">
              <StyledInstagram fill="grey" />
            </a>
          </Wrapper>
        )
      }}
    </ContextConsumer>
  )
}

export default NavLinks
