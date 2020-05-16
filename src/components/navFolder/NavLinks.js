import React from "react"
import styled, { css } from "styled-components"
import ContextConsumer from "../../contexts/navContext"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import NavLink from "../../styles/NavLink"
import NavSeparator from "../../styles/NavSeparator"
import { Behance, Instagram, LinkedIn } from "../Icon"

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  ${p =>
    p.issecondary &&
    css`
      width: 100%;
      height: calc(${p.innerHeight}px * 100);
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

const TextWrapper = styled.div`
  ${p =>
    p.issecondary &&
    css`
      height: 100%;
      /* margin: auto 0; */
      /* margin: 0; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    `}
`

const IconWrapper = styled.div`
  border-top: 1px solid #aaaaaa;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 40vh;
  padding-top: 15%;
`

const NavLinks = props => {
  const { height, width } = useWindowDimensions()

  const icons = props.issecondary ? (
    <IconWrapper>
      <a href="https://www.behance.net/MaryChoueiter">
        <Behance size="40" />
      </a>
      <a href="https://www.instagram.com/tahhiyakaryoka/">
        <Instagram size="40" />
      </a>
      <a href="https://www.linkedin.com/in/marychoueiter">
        <LinkedIn size="40" />
      </a>
    </IconWrapper>
  ) : (
    <>
      {" "}
      <a href="https://www.behance.net/MaryChoueiter">
        <Behance />
      </a>
      <a href="https://www.instagram.com/tahhiyakaryoka/">
        <Instagram />
      </a>
      <a href="https://www.linkedin.com/in/marychoueiter">
        <LinkedIn />
      </a>{" "}
    </>
  )

  return (
    <ContextConsumer>
      {({ menuData, set }) => {
        return (
          <Wrapper issecondary={props.issecondary} innerHeight={height * 0.01}>
            <TextWrapper issecondary={props.issecondary}>
              <NavLink
                onClick={() => {
                  set({ menuOpen: false, active: "/" })
                }}
                to="/"
                issecondary={props.issecondary}
                active={menuData.active === "/"}
              >
                Work
              </NavLink>
              <NavSeparator />
              <NavLink
                onClick={() => {
                  set({ menuOpen: false, active: "/side-notes" })
                }}
                to="/side-notes"
                issecondary={props.issecondary}
                active={menuData.active === "/side-notes"}
              >
                Side Notes
              </NavLink>

              <NavSeparator />

              <NavLink
                onClick={() => {
                  set({ menuOpen: false, active: "/about" })
                }}
                to="/about"
                issecondary={props.issecondary}
                active={menuData.active === "/about"}
              >
                About
              </NavLink>

              <NavSeparator />
            </TextWrapper>
            {icons}
          </Wrapper>
        )
      }}
    </ContextConsumer>
  )
}

export default NavLinks
