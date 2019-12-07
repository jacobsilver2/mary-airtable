import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ContextConsumer from "../../contexts/navContext"
import {
  IconWrapper,
  LogoLink,
  SecondaryMenu,
  Wrapper,
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
              <NavButton onClick={() => set({ menuOpen: !menuData.menuOpen })}>
                <IconWrapper rotate={menuData.menuOpen}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </IconWrapper>
              </NavButton>
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
