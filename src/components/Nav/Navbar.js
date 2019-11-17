import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Wrapper,
  NormalNavBar,
  StartWrapper,
  EndWrapper,
  LogoLink,
} from "../../styles/StyledNavbar"
import NavLinks from "./NavLinks"
import MobileNavbar from "./MobileNavbar"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <NormalNavBar>
        <StartWrapper>
          <LogoLink>{data.site.siteMetadata.title}</LogoLink>
        </StartWrapper>
        <EndWrapper>
          <NavLinks />
        </EndWrapper>
      </NormalNavBar>
      <MobileNavbar />
    </Wrapper>
  )
}

export default NavBar
