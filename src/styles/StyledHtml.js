import styled from "styled-components"
import Img from "gatsby-image"

export const TextWrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    margin-left: 25vw;
    margin-right: 25vw;
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
  font-size: 6rem;
  font-weight: 400;
  line-height: 70px;

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
  font-weight: 400;
  line-height: 34px;

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
  font-size: 2rem;
  color: #aaaaaa;
  line-height: 28px;

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
  font-size: 1.5rem;
  color: #aaaaaa;
  line-height: 24px;

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
  font-size: 1.4rem;
  color: #aaaaaa;
  line-height: 19px;
  margin-top: 5px;
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

export const StyledSmallImage = styled(Img)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
  /* min-width: 30%; */
`

export const StyledVideoContainer = styled.div`
  text-align: center;
  /* position: relative;
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
    width: 100%;
    height: 100%;
  } */
`
