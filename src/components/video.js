import React from "react"
import PropTypes from "prop-types"
import { StyledIframe } from "../styles/StyledHtml"

const Video = ({ videoSrcURL, videoTitle }) => (
  <>
    <StyledIframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </>
)

Video.propTypes = {
  videoSrcURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
}

export default Video
