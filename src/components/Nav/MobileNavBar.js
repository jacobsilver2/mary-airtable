import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import NavLinks from "./NavLinks"
import NavSeparator from "../../styles/NavSeparator"
import NavButton from "../../styles/NavButton"

import {
  Wrapper,
  SecondaryMenu,
  LogoLink,
  IconWrapper,
} from "../../styles/MobileNavBarStyles"
const MobileNavBar = ({ isMobileNavOpen, setMobileNav }) => {
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
    <Wrapper>
      <LogoLink onClick={() => setMobileNav(false)}>
        <h1>{data.site.siteMetadata.title}</h1>
      </LogoLink>
      <Wrapper>
        <NavButton
          onClick={() => setMobileNav(!isMobileNavOpen)}
          active={isMobileNavOpen}
        >
          <IconWrapper rotate={isMobileNavOpen}>
            <FontAwesomeIcon icon={faChevronDown} />
          </IconWrapper>
        </NavButton>
      </Wrapper>

      <SecondaryMenu open={isMobileNavOpen}>
        <NavLinks />
        <NavSeparator />
      </SecondaryMenu>
    </Wrapper>
  )
}

export default MobileNavBar
