import React from "react"
import Nav from "./Nav"
import Img from "gatsby-image"
import { StyledImageText } from "../styles/StyledHtml"
import Footer from "../components/footer"

const WorkLayout = ({ hero, children }) => {
  return (
    <>
      <Nav />
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

export default WorkLayout
