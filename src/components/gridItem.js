import React, { useState, useContext } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { CTX } from "../contexts/urlContext"
import { spring, Motion } from "react-motion"
import {
  StyledContainer,
  StyledSubContainer,
  StyledContainerImage,
  StyledTitle,
  StyledTitleText,
  StyledOverlay,
  StyledPasswordText,
} from "../styles/StyledGridItem"

const GridItem = props => {
  const { fluid, title, url, isProtected } = props
  console.log(props)
  const [isHovering, setIsHovering] = useState(false)
  const [currentLinkState, setCurrentLinkState] = useContext(CTX)
  const getSpringProps = () => {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,
      },
      style: {
        scale: spring(isHovering ? 1 : 1),
        marginTop: spring(isHovering ? 22 : 25),
        imageOpacity: spring(isHovering ? 0.4 : 0.7),
        opacity: spring(isHovering ? 1 : 0),
      },
    }
  }
  return (
    <Motion {...getSpringProps()}>
      {motionStyle => {
        let styleImage = {
          transform: "scale(" + motionStyle.scale + ")",
          opacity: motionStyle.imageOpacity,
        }
        let styleTitle = { opacity: motionStyle.opacity }
        return (
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* <Link
              to={url}
              onClick={() => {
                console.log(props)
                setCurrentLinkState({ currentUrl: url })
              }}
            > */}
            <StyledContainer>
              <StyledSubContainer>
                <StyledContainerImage>
                  <Img fluid={fluid} style={styleImage} alt={title} />
                </StyledContainerImage>
                <StyledOverlay>
                  <StyledTitle style={styleTitle}>
                    <StyledTitleText>
                      <p dangerouslySetInnerHTML={{ __html: title }} />
                      {isProtected && (
                        <StyledPasswordText>
                          password protected
                        </StyledPasswordText>
                      )}
                    </StyledTitleText>
                  </StyledTitle>
                </StyledOverlay>
              </StyledSubContainer>
            </StyledContainer>
            {/* </Link> */}
          </div>
        )
      }}
    </Motion>
  )
}

export default GridItem
