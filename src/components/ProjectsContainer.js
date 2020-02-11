import PropTypes from "prop-types"
import Img from "gatsby-image"
import React from "react"
import { StyledImageText } from "../styles/StyledHtml"
import styled from "styled-components"
import Footer from "./footerComponent"
import SideNotesFooter from "./SideNotesFooter"

const StyledHero = styled(Img)`
  display: block;
  margin: 0 auto;
  width: 100%;
`

const StyledHeroImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`

const StyledContainer = styled.div`
  @media only screen and (min-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const StyledHeroContainer = styled.div`
  margin-bottom: 10rem;
`

const renderHero = hero =>
  hero[0].childImageSharp ? (
    <StyledHero fluid={hero[0].childImageSharp.fluid} />
  ) : (
    <StyledHeroImg src={hero[0].publicURL} alt="" />
  )

const ProjectsContainer = ({ location, hero, type = "project", children }) => {
  return (
    <StyledContainer>
      {hero && (
        <StyledHeroContainer>
          {hero.data ? (
            renderHero(hero.data.Attachments.localFiles)
          ) : (
            <StyledHeroImg src={hero.fields.Attachments[0].url} alt="" />
          )}
          {hero.data ? (
            <StyledImageText>
              {hero.data.Text && hero.data.Text}
            </StyledImageText>
          ) : (
            <StyledImageText>
              {hero.fields.Text && hero.fields.Text}
            </StyledImageText>
          )}
        </StyledHeroContainer>
      )}
      <main>{children}</main>
      {type === "project" && <Footer location={location} />}
      {type === "side-note" && <SideNotesFooter location={location} />}
    </StyledContainer>
  )
}

ProjectsContainer.propTypes = {
  children: PropTypes.any,
  hero: PropTypes.any,
  location: PropTypes.any,
  type: PropTypes.string,
}

export default ProjectsContainer
