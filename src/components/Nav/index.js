import React from "react"
import Navbar from "./Navbar"

// heavily borrowing from https://github.com/arsmth/gatsby-responsive-nav

const Nav = ({ isMobileNavFolded, onMobileNavToggle }) => (
  <div>
    <Navbar
      isMobileNavFolded={isMobileNavFolded}
      onMobileNavToggle={onMobileNavToggle}
    />
  </div>
)

export default Nav
