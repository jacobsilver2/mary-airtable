import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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

const MobileNavBar = ({ onMobileNavToggle, isMobileNavFolded }) => {
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
        <NavButton onClick={onMobileNavToggle} active={!isMobileNavFolded}>
          <IconWrapper rotate={!isMobileNavFolded}>
            <FontAwesomeIcon icon={faChevronDown} />
          </IconWrapper>
        </NavButton>
      </Wrapper>

      <SecondaryMenu open={!isMobileNavFolded}>
        <NavLinks />
        <NavSeparator />
      </SecondaryMenu>
    </Wrapper>
  )
}

export default MobileNavBar
