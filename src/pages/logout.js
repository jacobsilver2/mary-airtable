import React from "react"
import { logout } from "../utility/auth"

const LogoutPage = () => {
  logout()
  return <div>logging out</div>
}

export default LogoutPage
