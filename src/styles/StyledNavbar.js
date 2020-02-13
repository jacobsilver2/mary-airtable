import styled, { css } from "styled-components"
import { Link } from "gatsby"
import rem from "../utility/rem"
import { navbarHeight } from "../utility/sizes"
import { mobile } from "../utility/media"

export const Wrapper = styled.div`
  position: relative;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  /* width: 100%; */
  height: ${rem(navbarHeight)};
  background: white;
  transition: background 300ms ease-out;
  color: black;
  a {
    text-decoration: none;
  }
`

export const NormalNavBar = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 ${rem(20)}; */

  ${mobile(
    css`
      display: none;
    `
  )}
`

export const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const EndWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #aaaaaa;
`

export const LogoLink = styled(Link).attrs({
  to: "/",
  "aria-label": "home",
})`
  /* margin-left: 3rem; */
  font-weight: 500;
  font-size: 3rem;
  display: inline-block;
  vertical-align: middle;
  /* margin-right: ${rem(35)}; */
  color: currentColor;
`
