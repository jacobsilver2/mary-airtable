import { Link } from "gatsby"
import styled, { css } from "styled-components"

const NavLink = styled(Link)`
  /* flex: 0 0 auto; */
  /* display: inline-block; */
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  ${p =>
    p.isSecondary &&
    css`
      /* margin: 3rem 0 3rem 0; */
      margin-top: 5rem;
    `}
  ${props =>
    props.active
      ? css`
          color: red;
        `
      : css`
          color: #aaaaaa;
        `}
  &:hover,
  &:focus {
    opacity: 0.8s;
    color: red;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
    color: red;
  }
`
export default NavLink
