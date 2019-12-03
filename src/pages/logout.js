import React, { useEffect } from "react"
import { logout } from "../utility/auth"

const LogoutPage = () => {
  // logout()
  useEffect(() => {
    logout()
  }, [])
  return <div>logging out</div>
}

export default LogoutPage
