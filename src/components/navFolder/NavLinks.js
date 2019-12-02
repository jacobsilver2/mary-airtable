import React from "react"
import styled from "styled-components"
import NavLink from "../../styles/NavLink"
import NavSeparator from "../../styles/NavSeparator"
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
const NavLinks = ({ isMobileNavOpen, setMobileNav }) => {
  return (
    <Wrapper>
      <NavLink onClick={() => setMobileNav(false)} to="/">
        Work
      </NavLink>
      <NavSeparator />
      <NavLink onClick={() => setMobileNav(false)} to="/side-notes">
        Side-Notes
      </NavLink>
      <NavSeparator />
      <NavLink onClick={() => setMobileNav(false)} to="/about">
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
}

export default NavLinks
