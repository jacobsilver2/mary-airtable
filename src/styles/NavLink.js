import { Link } from "gatsby"
import styled, { css } from "styled-components"

const NavLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Eczar&display=swap");
  font-family: Eczar;
  font-style: normal;
  font-weight: normal;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  font-size: 13px;
  cursor: pointer;

  ${p =>
    p.issecondary &&
    css`
      /* margin: 3rem 0 3rem 0; */
      margin-top: 5rem;
    `}
  ${props =>
    props.active
      ? css`
          color: #000000;
        `
      : css`
          color: #858585;
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
