import React, { useState } from "react"
import Navbar from "./Navbar"
// heavily borrowing from https://github.com/arsmth/gatsby-responsive-nav

const Nav = () => {
  const [isMobileNavOpen, setMobileNav] = useState(false)
  return (
    <>
      <Navbar isMobileNavOpen={isMobileNavOpen} setMobileNav={setMobileNav} />
    </>
  )
}

export default Nav
