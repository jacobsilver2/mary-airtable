import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContextConsumer from "../../contexts/navContext"
import HamburgerMenu from "react-hamburger-menu"
import {
  LogoLink,
  SecondaryMenu,
  Wrapper,
} from "../../styles/MobileNavBarStyles"
import NavSeparator from "../../styles/NavSeparator"
import NavLinks from "./NavLinks"

const MobileNavBar = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryNumberTwo {
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
        const { title } = data.site.siteMetadata
        return (
          <Wrapper>
            <LogoLink
              visible={!menuData.menuOpen}
              onClick={() => set({ menuOpen: false })}
            >
              <h1>{title}</h1>
            </LogoLink>

            {/* <Wrapper> */}
            <HamburgerMenu
              isOpen={menuData.menuOpen}
              menuClicked={() => set({ menuOpen: !menuData.menuOpen })}
              width={30}
              height={15}
            />
            {/* </Wrapper> */}
            <SecondaryMenu open={menuData.menuOpen}>
              <NavLinks />
              <NavSeparator />
            </SecondaryMenu>
          </Wrapper>
        )
      }}
    </ContextConsumer>
  )
}

export default MobileNavBar
