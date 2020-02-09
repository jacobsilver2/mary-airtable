import React from "react"
import styled, { css } from "styled-components"
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
  font-size: 1.5rem;
  ${p =>
    p.isSecondary &&
    css`
      width: 100%;
      height: calc(100vh - 8rem);
      flex-direction: column;
      justify-content: flex-start;
      font-size: 2.2rem;
      div:last-of-type {
        margin-top: auto;
      }
    `}
  @media screen and (max-width: 374px) {
    font-size: 1.1rem;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  border-top: 1px solid #aaaaaa;
`

const NavLinks = props => {
  const icons = props.isSecondary ? (
    <IconWrapper>
      <a href="https://www.behance.net/MaryChoueiter">
        <StyledBehance fill="#aaaaaa" />
      </a>
      <a href="https://www.instagram.com/tahhiyakaryoka/">
        <StyledLinkedIn fill="#aaaaaa" />
      </a>
      <a href="https://www.linkedin.com/in/marychoueiter">
        <StyledInstagram fill="#aaaaaa" />
      </a>
    </IconWrapper>
  ) : (
    <>
      {" "}
      <a href="https://www.behance.net/MaryChoueiter">
        <StyledBehance fill="#aaaaaa" />
      </a>
      <a href="https://www.instagram.com/tahhiyakaryoka/">
        <StyledLinkedIn fill="#aaaaaa" />
      </a>
      <a href="https://www.linkedin.com/in/marychoueiter">
        <StyledInstagram fill="#aaaaaa" />
      </a>{" "}
    </>
  )

  return (
    <ContextConsumer>
      {({ menuData, set }) => {
        return (
          <Wrapper isSecondary={props.isSecondary}>
            <NavLink
              onClick={() => {
                set({ menuOpen: false })
              }}
              to="/"
              isSecondary={props.isSecondary}
            >
              Work
            </NavLink>
            <NavSeparator />
            <NavLink
              onClick={() => {
                set({ menuOpen: false })
              }}
              to="/side-notes"
              isSecondary={props.isSecondary}
            >
              Side Notes
            </NavLink>

            <NavSeparator />

            <NavLink
              onClick={() => {
                set({ menuOpen: false })
              }}
              to="/about"
              isSecondary={props.isSecondary}
            >
              About
            </NavLink>

            <NavSeparator />
            {icons}
          </Wrapper>
        )
      }}
    </ContextConsumer>
  )
}

export default NavLinks
