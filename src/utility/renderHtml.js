import React from "react"
import Img from "gatsby-image"
import StyledVideoContainer from "../styles/StyledVideoContainer"
import StyledImageText from "../styles/StyledImageText"

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
      return <h1 key={id}>{data.Text}</h1>
    case "h2":
      return <h2 key={id}>{data.Text}</h2>
    case "Paragraph":
      const paragraph = data.Link ? (
        <a key={id} href={data.Link}>
          <p>{data.Text}</p>
        </a>
      ) : (
        <p key={id}>{data.Text}</p>
      )
      return paragraph
    case "Image":
      return (
        <div key={id}>
          <Img fluid={data.Attachments.localFiles[0].childImageSharp.fluid} />
          {data.Text && <StyledImageText>{data.Text}</StyledImageText>}
        </div>
      )
    case "gif":
      return <img key={id} src={data.Attachments.localFiles[0].publicURL} />
    case "Video":
      return (
        <StyledVideoContainer key={id}>
          <iframe title={data.Name} src={data.Link} width="853" height="480" />
        </StyledVideoContainer>
      )
    default:
      return <div></div>
  }
}
