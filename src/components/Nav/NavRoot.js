import React, { useState } from "react"
import NavBar from "./NavBar"
// heavily borrowing from https://github.com/arsmth/gatsby-responsive-nav

const Nav = () => {
  const [isMobileNavOpen, setMobileNav] = useState(false)
  return (
    <>
      <NavBar isMobileNavOpen={isMobileNavOpen} setMobileNav={setMobileNav} />
    </>
  )
}

export default Nav
