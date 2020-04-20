import styled from "styled-components"
import Img from "gatsby-image"

export const TextContainer = styled.div`
  margin-bottom: 141px;
`

export const TextWrapper = styled.div`
  margin-left: 15vw;
  margin-right: 15vw;
  @media only screen and (min-width: 1200px) {
    margin-left: 25vw;
    margin-right: 25vw;
  }
  @media only screen and (max-width: 540px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`
export const ImageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`

export const SmallImageWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

export const StyledHOne = styled.h1`
  font-size: 6.6rem;
  letter-spacing: 0.02em;
  line-height: 70px;
  margin-bottom: 2.9rem;

  @media only screen and (max-width: 768px) {
    font-size: 4rem;
    line-height: 39px;
  }

  @media only screen and (max-width: 540px) {
    font-size: 3.2rem;
    line-height: 32px;
  }
`

export const StyledHTwo = styled.h2`
  font-size: 2.6rem;
  font-style: normal;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: 0.01em;
  margin-bottom: 1.2rem;

  @media only screen and (max-width: 767px) {
    font-size: 1.9rem;
    line-height: 25px;
  }
  @media only screen and (max-width: 540px) {
    font-size: 1.6rem;
    line-height: 21px;
  }
`

export const StyledP = styled.p`
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  color: #999999;
  line-height: 24px;
  letter-spacing: 0.01em;

  @media only screen and (max-width: 767px) {
    font-size: 1.7rem;
    line-height: 24px;
  }

  @media only screen and (max-width: 540px) {
    font-size: 1.4rem;
    line-height: 20px;
  }
`

export const StyledATag = styled.a`
  /* text-decoration: none; */
  &:link {
    color: #aaaaaa;
    border-bottom: 1px solid #aaaaaa;
  }
  &:visited {
    color: #aaaaaa;
    border-bottom: 1px solid #aaaaaa;
  }
  &:hover {
    color: red;
    border-bottom: 1px solid #aaaaaa;
  }
`

export const StyledSmallText = styled.p`
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  letter-spacing: 0.01em;
  line-height: 24px;
  color: #999999;

  @media only screen and (max-width: 767px) {
    font-size: 1.3rem;
    line-height: 20px;
  }

  @media only screen and (max-width: 540px) {
    font-size: 1rem;
    line-height: 16px;
  }
`

export const StyledImageText = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 10px;
  letter-spacing: 0.01em;
  color: #999999;
  margin-top: 1.1rem;
  margin-left: 25vw;
  margin-right: 25vw;

  @media only screen and (max-width: 767px) {
    font-size: 1rem;
    line-height: 15px;
    padding-left: 0;
    padding-right: 0;
  }
`
export const StyledImage = styled(Img)`
  /* margin-bottom: 2rem; */
`

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const StyledSmallImage = styled(Img)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
  /* min-width: 30%; */
`

export const StyledVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin-bottom: 2rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
