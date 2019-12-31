import Img from "gatsby-image"
import React, { useState } from "react"
import { Motion, spring } from "react-motion"
import { capitalize } from "../utility/capitalize"
import {
  StyledContainer,
  StyledContainerImage,
  StyledOverlay,
  StyledPasswordText,
  StyledSubContainer,
  StyledTitle,
  StyledTitleText,
} from "../styles/StyledGridItem"

const GridItem = props => {
  const { fluid, title, isProtected } = props
  const titleify = capitalize(title.replace(/[-]+/g, " "))
  const [isHovering, setIsHovering] = useState(false)
  const getSpringProps = () => {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.2,
        opacity: 1,
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
            <StyledContainer>
              <StyledSubContainer>
                <StyledContainerImage>
                  <Img fluid={fluid} style={styleImage} alt={titleify} />
                </StyledContainerImage>
                <StyledTitle style={styleTitle}>
                  <StyledTitleText>
                    <p dangerouslySetInnerHTML={{ __html: titleify }} />
                    {isProtected && (
                      <StyledPasswordText>
                        password protected
                      </StyledPasswordText>
                    )}
                  </StyledTitleText>
                </StyledTitle>
              </StyledSubContainer>
            </StyledContainer>
          </div>
        )
      }}
    </Motion>
  )
  // return (
  //   <div
  //     onMouseEnter={() => setIsHovering(true)}
  //     onMouseLeave={() => setIsHovering(false)}
  //   >
  //     <Img fluid={fluid} alt={titleify} />
  //   </div>
  // )
}

export default GridItem
