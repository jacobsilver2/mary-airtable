import React from "react"
import { navigate } from "gatsby"
import { StyledHTwo } from "../styles/StyledHtml"
const FooterComponent = () => {
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

export default FooterComponent
