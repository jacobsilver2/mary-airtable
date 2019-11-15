import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  color: currentColor;
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
