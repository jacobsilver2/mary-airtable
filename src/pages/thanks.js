import React from "react"
import { navigate } from "gatsby"

const Thanks = () => {
  setTimeout(function() {
    navigate("/")
  }, 3000)
  return (
    <>
      <div className="container">Thanks for getting in touch!</div>
    </>
  )
}

export default Thanks
