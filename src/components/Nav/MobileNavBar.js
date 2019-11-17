import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import NavLinks from "./NavLinks"
import NavSeparator from "../../styles/NavSeparator"
import NavButton from "../../styles/NavButton"
import { CTX } from "./NavContext"

import {
  Wrapper,
  SecondaryMenu,
  LogoLink,
  IconWrapper,
} from "../../styles/MobileNavBarStyles"

const MobileNavBar = () => {
  const [navState, updateNavState] = useContext(CTX)
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
      <LogoLink>
        <h1>{data.site.siteMetadata.title}</h1>
      </LogoLink>
      <Wrapper>
        <NavButton
          onClick={() =>
            updateNavState({ isMobileNavFolded: !navState.isMobileNavFolded })
          }
          active={!navState.isMobileNavFolded}
        >
          <IconWrapper rotate={!navState.isMobileNavFolded}>
            <FontAwesomeIcon icon={faChevronDown} />
          </IconWrapper>
        </NavButton>
      </Wrapper>

      <SecondaryMenu open={!navState.isMobileNavFolded}>
        <NavLinks />
        <NavSeparator />
      </SecondaryMenu>
    </Wrapper>
  )
}

export default MobileNavBar
