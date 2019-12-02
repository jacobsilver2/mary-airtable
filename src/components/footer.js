import React from "react"
import { navigate } from "gatsby"
import { StyledHTwo } from "../styles/StyledHtml"
const Footer = () => {
  function goBack() {
    navigate("/")
  }

  return (
    <StyledHTwo
      style={{ textAlign: "center", cursor: "pointer" }}
      onClick={goBack}
    >
      back
    </StyledHTwo>
  )
}

export default Footer
