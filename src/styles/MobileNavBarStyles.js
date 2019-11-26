import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { navbarHeight } from "../utility/sizes"
import { mobile } from "../utility/media"
import rem from "../utility/rem"

export const Wrapper = styled.div`
  display: none;
  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
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
          height: 8rem;
        `
      : css`
          height: 0;
        `}
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
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
  margin-left: 3rem;
  font-weight: 500;
  font-size: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  color: currentColor;
`

export const IconWrapper = styled.div`
  transition: transform 0.1s;
  color: black;
  ${p =>
    p.rotate &&
    css`
      transform-origin: 50% 55%;
      transform: rotate(180deg);
    `}
`
export const SecondaryMenuItem = styled.div`
  /* padding-right: 1.25rem */
`
