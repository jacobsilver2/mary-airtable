import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContextConsumer from "../../contexts/navContext"
import HamburgerMenu from "react-hamburger-menu"
import ScrollLock from "react-scrolllock"
import {
  LogoLink,
  SecondaryMenu,
  Wrapper,
  HamurgerMenuWrapper,
} from "../../styles/MobileNavBarStyles"
import NavSeparator from "../../styles/NavSeparator"
import NavLink from "../../styles/NavLink"
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
          <Wrapper secondaryIsOpen={menuData.menuOpen}>
            <LogoLink
              visible={!menuData.menuOpen}
              onClick={() => set({ menuOpen: false })}
            >
              <h1>{title}</h1>
            </LogoLink>
            <HamurgerMenuWrapper secondaryIsOpen={menuData.menuOpen}>
              <HamburgerMenu
                isOpen={menuData.menuOpen}
                menuClicked={() => set({ menuOpen: !menuData.menuOpen })}
                width={30}
                height={15}
              />
            </HamurgerMenuWrapper>
            <ScrollLock isActive={menuData.menuOpen}>
              <SecondaryMenu open={menuData.menuOpen}>
                <NavLinks isSecondary={true} />
              </SecondaryMenu>
            </ScrollLock>
          </Wrapper>
        )
      }}
    </ContextConsumer>
  )
}

export default MobileNavBar
