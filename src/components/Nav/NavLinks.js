import React, { useContext } from "react"
import styled from "styled-components"
import NavLink from "../../styles/NavLink"
import { CTX } from "./NavContext"
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

const NavLinks = () => {
  const [activePath, setActivePath] = useContext(CTX)
  return (
    <Wrapper>
      <NavLink
        onClick={() =>
          setActivePath({ activePath: "/", isMobileNavFolded: true })
        }
        active={activePath.activePath === "/"}
        to="/"
      >
        Work
      </NavLink>
      <NavSeparator />
      <NavLink
        onClick={() =>
          setActivePath({ activePath: "/side-notes", isMobileNavFolded: true })
        }
        active={activePath.activePath === "/side-notes"}
        to="/side-notes"
      >
        Side-Notes
      </NavLink>
      <NavSeparator />
      <NavLink
        onClick={() =>
          setActivePath({ activePath: "/about", isMobileNavFolded: true })
        }
        active={activePath.activePath === "/about"}
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
