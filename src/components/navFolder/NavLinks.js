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
//? look into useRef instead of useState for active link monitoring.  State seems to be
//? refreshing too much.

const NavLinks = ({ isMobileNavOpen, setMobileNav, active, setActive }) => {
  return (
    <Wrapper>
      <NavLink
        onClick={() => {
          setActive("/")
          setMobileNav(false)
        }}
        active={active === "/"}
        to="/"
      >
        Work
      </NavLink>
      <NavSeparator />
      <NavLink
        onClick={() => {
          setActive("/side-notes")
          setMobileNav(false)
        }}
        active={active === "/side-notes"}
        to="/side-notes"
      >
        Side-Notes
      </NavLink>

      <NavSeparator />

      <NavLink
        onClick={() => {
          setActive("/about")
          setMobileNav(false)
        }}
        active={active === "/about"}
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
}

export default NavLinks
