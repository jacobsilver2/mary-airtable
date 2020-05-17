import { Link } from "gatsby"
import styled, { css } from "styled-components"

const NavLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Eczar&display=swap");
  font-family: Eczar;
  font-style: normal;
  font-weight: normal;
  line-height: 1.4rem;
  transition: opacity 0.2s, transform 0.2s;
  font-size: 1.5rem;
  cursor: pointer;

  ${p =>
    p.issecondary &&
    css`
      /* margin: 3rem 0 3rem 0; */
      /* margin-top: 5rem; */
      /* margin-bottom: 3rem; */
      font-size: 3.5rem;
    `}
  ${props =>
    props.active
      ? css`
          color: #000000;
        `
      : css`
          color: #858585;
        `}
        
  &:hover {
    color: #ff0000;
  }
  &:focus {
    opacity: 0.8s;
    /* color: red; */
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.6;
    /* color: #000000; */
  }
`
export default NavLink
