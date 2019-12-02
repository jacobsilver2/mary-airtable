import Img from "gatsby-image"
import React from "react"
import { StyledImageText } from "../styles/StyledHtml"
import styled from "styled-components"
import Footer from "./Footer"

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

const renderHero = hero =>
  hero[0].childImageSharp ? (
    <StyledHero fluid={hero[0].childImageSharp.fluid} />
  ) : (
    <StyledHeroImg src={hero[0].publicURL} alt="" />
  )

const WorkContainer = ({ hero, children }) => {
  return (
    <>
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
      <Footer />
    </>
  )
}

export default WorkContainer
