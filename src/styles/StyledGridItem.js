import styled, { css } from "styled-components"

export const StyledContainer = styled.div`
  display: table;
  cursor: pointer;
  width: 100%;
`

export const StyledSubContainer = styled.div`
  position: relative;
  ${p =>
    p.isHovering &&
    css`
      background-color: rgba(0, 0, 0, 0.9);
    `}
  overflow: hidden;
`

export const StyledContainerImage = styled.div`
  position: relative;
  /* background-color: #17819c; */
`

export const StyledPasswordText = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
`

export const StyledTitle = styled.div`
  text-align: left;
  font-size: 4.8rem;
  font-weight: 500;
  float: left;
  width: 80%;
  line-height: 5rem;
  letter-spacing: 0.01em;
  padding-left: 0%;
  padding-right: 0%;
  padding-bottom: 100px;
  padding-top: 0px;
  color: white;
  position: absolute;
  top: 3%;
  left: 7%;
  @media screen and (max-width: 375px) {
    font-size: 2rem;
    line-height: 25px;
  }
  ${p =>
    p.isFooter &&
    css`
      font-size: 2rem;
      line-height: 25px;
    `}
`

export const StyledTitleText = styled.div`
  position: relative;
  font-style: normal;
`

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const StyledImg = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
`
