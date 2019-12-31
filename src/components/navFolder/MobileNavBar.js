import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContextConsumer from "../../contexts/navContext"
import HamburgerMenu from "react-hamburger-menu"
import {
  IconWrapper,
  LogoLink,
  SecondaryMenu,
  Wrapper,
  BarOne,
  BarTwo,
  BarThree,
} from "../../styles/MobileNavBarStyles"
import NavButton from "../../styles/NavButton"
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
        return (
          <Wrapper>
            <LogoLink onClick={() => set({ menuOpen: false })}>
              <h1>{data.site.siteMetadata.title}</h1>
            </LogoLink>
            <Wrapper>
              <HamburgerMenu
                isOpen={menuData.menuOpen}
                menuClicked={() => set({ menuOpen: !menuData.menuOpen })}
                width={20}
                height={15}
              />
            </Wrapper>
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
