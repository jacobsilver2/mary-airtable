import React from "react"
import { navigate } from "gatsby"
import { TextWrapper, StyledHTwo } from "../styles/StyledHtml"

const Thanks = () => {
  setTimeout(function() {
    navigate("/")
  }, 3000)
  return (
    <TextWrapper>
      <StyledHTwo>Thanks for getting in touch!</StyledHTwo>
    </TextWrapper>
  )
}

export default Thanks
