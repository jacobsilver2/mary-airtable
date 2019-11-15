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

const NavBar = ({ onMobileNavToggle, isMobileNavFolded }) => {
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
          <LogoLink>
            <h1>{data.site.siteMetadata.title}</h1>
          </LogoLink>
        </StartWrapper>
        <EndWrapper>
          <NavLinks />
        </EndWrapper>
      </NormalNavBar>

      <MobileNavbar
        isMobileNavFolded={isMobileNavFolded}
        onMobileNavToggle={onMobileNavToggle}
      />
    </Wrapper>
  )
}

export default NavBar
