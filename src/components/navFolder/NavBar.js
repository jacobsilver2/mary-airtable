import { graphql, navigate, useStaticQuery } from "gatsby"
import React from "react"
import {
  EndWrapper,
  LogoLink,
  NormalNavBar,
  StartWrapper,
  Wrapper,
} from "../../styles/StyledNavbar"
import MobileNavbar from "./MobileNavBar"
import NavLinks from "./NavLinks"

const NavBarComponent = ({ isMobileNavOpen, setMobileNav }) => {
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
          <LogoLink
            onClick={() => {
              setMobileNav(false)
              navigate("/")
            }}
          >
            {data.site.siteMetadata.title}
          </LogoLink>
        </StartWrapper>
        <EndWrapper>
          <NavLinks
            isMobileNavOpen={isMobileNavOpen}
            setMobileNav={setMobileNav}
          />
        </EndWrapper>
      </NormalNavBar>
      <MobileNavbar
        isMobileNavOpen={isMobileNavOpen}
        setMobileNav={setMobileNav}
      />
    </Wrapper>
  )
}

export default NavBarComponent
