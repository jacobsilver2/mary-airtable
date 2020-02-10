import Img from "gatsby-image"
import React from "react"
import { Link } from "gatsby"
import { StyledImageText } from "../styles/StyledHtml"
import styled from "styled-components"
import Footer from "./footerComponent"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

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

const renderHero = hero =>
  hero[0].childImageSharp ? (
    <StyledHero fluid={hero[0].childImageSharp.fluid} />
  ) : (
    <StyledHeroImg src={hero[0].publicURL} alt="" />
  )

const workContainer = ({ location, hero, children }) => {
  return (
    <StyledContainer>
      {hero && (
        <>
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
        </>
      )}
      <main>{children}</main>
      <Footer location={location} />
    </StyledContainer>
  )
}

export default workContainer
