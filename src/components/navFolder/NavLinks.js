import React from "react"
import styled from "styled-components"
import ContextConsumer from "../../contexts/navContext"
import NavLink from "../../styles/NavLink"
import NavSeparator from "../../styles/NavSeparator"
import {
  StyledBehance,
  StyledInstagram,
  StyledLinkedIn,
} from "../../styles/StyledNavbar"

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: 0 0 auto; */
  font-size: 1.5rem;
  @media screen and (max-width: 374px) {
    font-size: 1.1rem;
  }
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
              Side Notes
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
              <StyledBehance fill="#aaaaaa" />
            </a>
            <a href="https://www.instagram.com/tahhiyakaryoka/">
              <StyledLinkedIn fill="#aaaaaa" />
            </a>
            <a href="https://www.linkedin.com/in/marychoueiter">
              <StyledInstagram fill="#aaaaaa" />
            </a>
          </Wrapper>
        )
      }}
    </ContextConsumer>
  )
}

export default NavLinks
