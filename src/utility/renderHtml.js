import React from "react"
import Img from "gatsby-image"
import Iframe from "react-iframe"
import {
  StyledH1,
  StyledH2,
  StyledP,
  StyledImage,
  StyledImageText,
  StyledVideoContainer,
} from "../styles/StyledHtml"

export const renderWorkHtml = node => {
  const { id, data } = node
  switch (data.Type) {
    case "Hero":
      return (
        <Img
          key={id}
          fluid={data.Attachments.localFiles[0].childImageSharp.fluid}
        />
      )
    case "h1":
      return <StyledH1 key={id}>{data.Text}</StyledH1>
    case "h2":
      return <StyledH2 key={id}>{data.Text}</StyledH2>
    case "Paragraph":
      const paragraph = data.Link ? (
        <a key={id} href={data.Link}>
          <StyledP>{data.Text}</StyledP>
        </a>
      ) : (
        <StyledP key={id}>{data.Text}</StyledP>
      )
      return paragraph
    case "Image":
      return (
        <div key={id} style={{ marginBottom: "2rem" }}>
          <StyledImage
            fluid={data.Attachments.localFiles[0].childImageSharp.fluid}
          />
          {data.Text && <StyledImageText>{data.Text}</StyledImageText>}
        </div>
      )
    case "gif":
      return (
        <img key={id} src={data.Attachments.localFiles[0].publicURL} alt="" />
      )
    case "Video":
      return (
        <StyledVideoContainer key={id}>
          <Iframe
            title={data.Name}
            url={data.Link}
            width="100%"
            height="100%"
          />
        </StyledVideoContainer>
      )
    default:
      return <div></div>
  }
}
