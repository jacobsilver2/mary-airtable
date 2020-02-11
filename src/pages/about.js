import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Contact from "../components/Contact"

const Wrapper = styled.div`
  display: block;
`
const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const TextWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 800px;
  font-size: 2rem;
  line-height: 2.8rem;
  margin: 0 auto;
  color: #999999;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`

const About = ({ data }) => {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <div></div>
          <Img
            // style={{ maxWidth: "627px" }}
            fluid={data.file.childImageSharp.fluid}
          />
          <div></div>
        </ImageWrapper>
        <TextWrapper>
          <p>
            Mary is a freelance creative who does her best work collaboratively.
            Some projects in her position as an art director at Ralph Appelbaum
            Associates include exhibition and media design for the Canadian
            Museum for Human Rights, Patricia and Phillip Frost Museum of
            Science, Moody Gardens, as well as an art museum in Beirut.
          </p>
          <p>
            Early on, she discovered that scissors can do magic and engaged in a
            career of perfecting cut out techniques in bright colors. Her love
            for paper is only equaled by her love for what is on the paper;
            stories, images, typography, and all the white space in between. Her
            typography work for the Beirut Exhibition Center signage was a
            Professional Runner-Up at the Core77 Design Awards. Her design work
            in print, branding, web and exhibition design has taken her to
            Lebanon, Amsterdam, and New York where she worked on the branding of
            Mathaf, the Museum of Modern Arab Art in Qatar with Wolff Olins.
          </p>
          <p>She would love to hear from you!</p>
        </TextWrapper>
        <Contact />
      </Wrapper>
    </>
  )
}

About.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 627, maxHeight: 618) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
