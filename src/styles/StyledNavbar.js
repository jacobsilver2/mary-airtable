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
  width: 100%;
  height: ${rem(navbarHeight)};
  /* font-size: ${rem(15)}; */
  /* font-weight: 500; */
  background: white;
  transition: background 300ms ease-out;
  color: black;
  a {
    text-decoration: none;
  }
`

export const NormalNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${rem(20)};

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
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const LogoLink = styled(Link).attrs({
  to: "/",
  "aria-label": "home",
})`
  font-weight: 500;
  font-size: 2rem;
  display: inline-block;
  vertical-align: center;
  margin-right: ${rem(35)};
  color: currentColor;
`
