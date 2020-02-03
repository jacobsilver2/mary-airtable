import React from "react"
import { navigate, Link } from "gatsby"
import { StyledHTwo } from "../styles/StyledHtml"
import Scroll from 'react-scroll';

const FooterComponent = () => {
  function goBack() {
    // navigate("/")
    Scroll.scrollToTop();
  }

  return (
    <div>Footer</div>
    // <StyledHTwo
    //   style={{ textAlign: "center", cursor: "pointer" }}
    //   onClick={goBack}
    // >
    //   back to top
    // </StyledHTwo>
    // <Link to="/#top">back to top</Link>
  )
}

export default FooterComponent
