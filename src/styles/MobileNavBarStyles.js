import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { navbarHeight } from "../utility/sizes"
import { mobile } from "../utility/media"
import rem from "../utility/rem"

// this is not used because mobilenavbar is already wrapped inside a Wrapper component
// in NavBar.js
export const Wrapper = styled.div`
  display: none;
  /* @media only screen and (min-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  } */
  margin-left: 10px;
  margin-right: 20px;
  ${p =>
    p.secondaryIsOpen &&
    css`
      margin-left: 0;
      margin-right: 0;
    `}

  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
  `)}
`
export const SecondaryMenu = styled.div`
  position: absolute;
  top: 8rem;
  left: 0;
  right: 0;
  ${p =>
    p.open
      ? css`
          height: 100vh;
        `
      : css`
          height: 0;
        `}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  padding: 0;

  transition: height 0.1s;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
  background: white;
  color: black;
`

export const LogoLink = styled(Link).attrs({
  to: "/",
  "aria-label": "home",
})`
  ${p =>
    !p.visible &&
    css`
      visibility: hidden;
    `}
  font-family: 'Rubik Mono One', sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1.8rem;
  letter-spacing: 0.06em;
  display: inline-block;
  vertical-align: middle;
  color: #000000;
  :hover {
    color: #ff0000;
  }
`

export const IconWrapper = styled.div`
  transition: transform 0.1s;
  color: black;
  ${p =>
    p.rotate &&
    css`
      transform-origin: 50% 55%;
    `}
`
export const HamurgerMenuWrapper = styled.div`
  ${p =>
    p.secondaryIsOpen &&
    css`
      margin-right: 20px;
    `}
`

export const SecondaryMenuItem = styled.div``
