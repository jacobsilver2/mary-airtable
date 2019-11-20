import React from "react"
import { logout } from "../utility/auth"

const Logout = () => {
  logout()
  return <div>logging out</div>
}

export default Logout
