import React from "react"
import { navigate } from "gatsby"

const Footer = () => {
  function goBack() {
    navigate("/")
  }

  return (
    <h3 style={{ textAlign: "center", cursor: "pointer" }} onClick={goBack}>
      back
    </h3>
  )
}

export default Footer
