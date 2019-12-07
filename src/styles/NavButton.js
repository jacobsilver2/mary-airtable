import styled, { css } from "styled-components"
import rem from "../utility/rem"
import { resetInput } from "../utility/form"
import { navbarHeight } from "../utility/sizes"

const NavButton = styled.button`
  ${resetInput}
  flex: 0 0 auto;
  min-width: ${rem(navbarHeight)};
  height: ${rem(navbarHeight)};
  color: black;
  text-align: right;
  vertical-align: middle;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      background: white;
    `}
`

export default NavButton
