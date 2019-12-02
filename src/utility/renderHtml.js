import React from "react"
import Img from "gatsby-image"
import Iframe from "react-iframe"
import {
  StyledHOne,
  StyledHTwo,
  StyledP,
  StyledImage,
  StyledImageText,
  StyledVideoContainer,
  StyledSmallImage,
  TextWrapper,
  ImageWrapper,
  SmallImageWrapper,
} from "../styles/StyledHtml"

export const renderWorkHtml = node => {
  const { id, data, fields } = node
  //? graphQl queries come in as node.data. Protected-route-axios queries come in as node.fields
  //? The next line casts either form into Node
  const Node = data ? data : fields
  // const type = fields ? fields.Type : data.Type
  switch (Node.Type) {
    //? Hero images are rendered in a parent component, so this case will not be used.
    case "Hero":
      return (
        <Img
          key={id}
          fluid={Node.Attachments.localFiles[0].childImageSharp.fluid}
        />
      )
    case "h1":
      return (
        <TextWrapper key={id}>
          <StyledHOne>{Node.Text}</StyledHOne>
        </TextWrapper>
      )
    case "h2":
      return (
        <TextWrapper>
          <StyledHTwo key={id}>{Node.Text}</StyledHTwo>
        </TextWrapper>
      )
    case "Paragraph":
      const paragraph = Node.Link ? (
        <a style={{ textDecoration: "none" }} key={id} href={Node.Link}>
          <StyledP>{Node.Text}</StyledP>
        </a>
      ) : (
        <StyledP key={id}>{Node.Text}</StyledP>
      )
      return <TextWrapper>{paragraph}</TextWrapper>
    case "Image":
      const image = Node.Attachments.localFiles ? (
        <StyledImage
          key={id}
          fluid={Node.Attachments.localFiles[0].childImageSharp.fluid}
        />
      ) : (
        <img
          key={id}
          style={{ maxWidth: "100%" }}
          src={Node.Attachments[0].url}
          alt=""
        />
      )
      return (
        <ImageWrapper key={id}>
          {image}
          {Node.Text && <StyledImageText>{Node.Text}</StyledImageText>}
        </ImageWrapper>
      )
    case "Small-Image":
      const smallImageHtml = Node.Attachments.localFiles ? (
        <StyledSmallImage
          key={id}
          fluid={Node.Attachments.localFiles[0].childImageSharp.fluid}
        />
      ) : (
        <img key={id} src={Node.Attachments[0].url} alt="" />
      )
      return (
        <SmallImageWrapper key={id}>
          {smallImageHtml}
          {Node.Text && <StyledImageText>{Node.Text}</StyledImageText>}
        </SmallImageWrapper>
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
