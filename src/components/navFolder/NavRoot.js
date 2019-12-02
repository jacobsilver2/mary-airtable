import React, { useState } from "react"
import NavBarComponent from "./NavBar"
// heavily borrowing from https://github.com/arsmth/gatsby-responsive-nav

const Nav = () => {
  const [isMobileNavOpen, setMobileNav] = useState(false)
  return (
    <>
      <NavBarComponent
        isMobileNavOpen={isMobileNavOpen}
        setMobileNav={setMobileNav}
      />
    </>
  )
}

export default Nav
