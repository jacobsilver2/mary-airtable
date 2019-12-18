import styled, { css } from "styled-components"
import rem from "../utility/rem"
import { resetInput } from "../utility/form"
import { navbarHeight } from "../utility/sizes"

const NavButton = styled.button`
  ${resetInput}
  align-self: flex-end;
  display: inline-block;
  cursor: pointer;
  flex: 0 0 auto;
  /* min-width: ${rem(navbarHeight)}; */
  height: ${rem(navbarHeight)};
  color: black;
  text-align: right;
  vertical-align: middle;
  ${props =>
    props.active &&
    css`
      background: white;
    `}
`

export default NavButton
