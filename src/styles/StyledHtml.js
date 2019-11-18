import styled from "styled-components"
import Img from "gatsby-image"

export const StyledH1 = styled.h1`
  padding-left: 25%;
  padding-right: 25%;
`

export const StyledH2 = styled.h2`
  padding-left: 25%;
  padding-right: 25%;
`

export const StyledP = styled.p`
  padding-left: 25%;
  padding-right: 25%;
`
export const StyledImageText = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 25%;
  padding-right: 25%;
`
export const StyledImage = styled(Img)`
  /* margin-bottom: 2rem; */
`

export const StyledSmallImage = styled(Img)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 40%;
  min-width: 30%;
`

export const StyledVideoContainer = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
  }
`
