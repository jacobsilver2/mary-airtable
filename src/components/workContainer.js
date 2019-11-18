import Img from "gatsby-image"
import React from "react"
import { StyledImageText } from "../styles/StyledHtml"
import Footer from "./footer"

const WorkContainer = ({ hero, children }) => {
  return (
    <>
      {hero && (
        <>
          <Img
            fluid={hero.data.Attachments.localFiles[0].childImageSharp.fluid}
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          />
          {hero.data.Text && (
            <StyledImageText>{hero.data.Text}</StyledImageText>
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
