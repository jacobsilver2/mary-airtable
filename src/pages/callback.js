import React, { useContext } from "react"
import { CTX } from "../contexts/urlContext"
import { handleAuthentication } from "../utility/auth"

const Callback = () => {
  const [currentLinkState, setCurrentLinkState] = useContext(CTX)
  console.log(currentLinkState)
  handleAuthentication(currentLinkState)

  return <p>Loading...</p>
}

export default Callback
