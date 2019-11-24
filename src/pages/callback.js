import React from "react"
import { handleAuthentication } from "../utility/auth"

const Callback = () => {
  handleAuthentication()

  return <p>Loading...</p>
}

export default Callback
