import Img from "gatsby-image"
import React from "react"
import { StyledImageText } from "../styles/StyledHtml"
import Footer from "./footer"

const WorkContainer = ({ hero, children }) => {
  return (
    <>
      {hero && (
        <>
          {hero.data ? (
            <Img
              fluid={hero.data.Attachments.localFiles[0].childImageSharp.fluid}
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            />
          ) : (
            <img
              src={hero.fields.Attachments[0].url}
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
              alt=""
            />
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
      <main style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default WorkContainer
