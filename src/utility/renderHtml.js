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
  StyledSmallImage,
  TextWrapper,
} from "../styles/StyledHtml"

export const renderWorkHtml = node => {
  const { id, data, fields } = node
  //! graphQl queries come in as node.data, protected-route-axios queries come in as node.fields. The next line casts either form into Node
  const Node = data ? data : fields
  // const type = fields ? fields.Type : data.Type
  switch (Node.Type) {
    case "Hero":
      return (
        <Img
          key={id}
          fluid={Node.Attachments.localFiles[0].childImageSharp.fluid}
        />
      )
    case "h1":
      return (
        <TextWrapper>
          <StyledH1 key={id}>{Node.Text}</StyledH1>
        </TextWrapper>
      )
    case "h2":
      return (
        <TextWrapper>
          <StyledH2 key={id}>{Node.Text}</StyledH2>
        </TextWrapper>
      )
    case "Paragraph":
      const paragraph = Node.Link ? (
        <TextWrapper>
          <a style={{ textDecoration: "none" }} key={id} href={Node.Link}>
            <StyledP>{Node.Text}</StyledP>
          </a>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <StyledP key={id}>{Node.Text}</StyledP>
        </TextWrapper>
      )
      return paragraph
    case "Image":
      return (
        <div key={id} style={{ marginBottom: "2rem" }}>
          {Node.Attachments.localFiles ? (
            <StyledImage
              fluid={Node.Attachments.localFiles[0].childImageSharp.fluid}
            />
          ) : (
            <img
              style={{ maxWidth: "100%" }}
              src={Node.Attachments[0].url}
              alt=""
            />
          )}
          {Node.Text && <StyledImageText>{Node.Text}</StyledImageText>}
        </div>
      )
    case "Small-Image":
      return (
        <div key={id} style={{ marginBottom: "2rem", textAlign: "center" }}>
          {Node.Attachments.localFiles ? (
            <StyledSmallImage
              fluid={Node.Attachments.localFiles[0].childImageSharp.fluid}
            />
          ) : (
            <img src={Node.Attachments[0].url} alt="" />
          )}
          {Node.Text && <StyledImageText>{Node.Text}</StyledImageText>}
        </div>
      )
    case "gif":
      return (
        <img
          style={{ width: "100%" }}
          key={id}
          src={
            Node.Attachments.localFiles
              ? Node.Attachments.localFiles[0].publicURL
              : Node.Attachments[0].url
          }
          alt=""
        />
      )
    case "Video":
      return (
        <StyledVideoContainer key={id}>
          <Iframe
            title={Node.Name}
            url={Node.Link}
            width="100%"
            height="100%"
          />
        </StyledVideoContainer>
      )
    default:
      return <div></div>
  }
}
