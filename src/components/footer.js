import React from "react"
import { navigate } from "gatsby"
import { StyledH2 } from "../styles/StyledHtml"
const Footer = () => {
  function goBack() {
    navigate("/")
  }

  return (
    <StyledH2
      style={{ textAlign: "center", cursor: "pointer" }}
      onClick={goBack}
    >
      back
    </StyledH2>
  )
}

export default Footer
