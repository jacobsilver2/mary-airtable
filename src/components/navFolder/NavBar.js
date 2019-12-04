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
import ContextConsumer from "../../contexts/navContext"

const NavBarComponent = () => {
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
    <ContextConsumer>
      {({ menuData, set }) => {
        return (
          <Wrapper>
            <NormalNavBar>
              <StartWrapper>
                <LogoLink
                  onClick={() => {
                    set({ menuOpen: false })
                    navigate("/")
                  }}
                >
                  {data.site.siteMetadata.title}
                </LogoLink>
              </StartWrapper>
              <EndWrapper>
                <NavLinks />
              </EndWrapper>
            </NormalNavBar>
            <MobileNavbar />
          </Wrapper>
        )
      }}
    </ContextConsumer>
  )
}

export default NavBarComponent
