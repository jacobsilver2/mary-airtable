import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import useWindowWidth from "../hooks/useWindowWidth"
import GridItem from "../components/gridItem"
import { TextWrapper, StyledHTwo } from "../styles/StyledHtml"

const FooterContainer = styled.footer`
  display: grid;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 540px) and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 539px) {
    grid-template-columns: 1fr;
  }
`

export const BackWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
`

export const BackText = styled(Link)`
  color: black;
  text-decoration: none;
  /* font-style: italic; */
  display: inline-block;
  border-bottom: 2px solid red;
  padding-bottom: 0;
  line-height: 70%;
  &:visited {
    color: black;
  }
`

const FooterComponent = ({ location, type }) => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "WorkHome" } }
        sort: { fields: data___Order }
      ) {
        nodes {
          data {
            Name
            Order
            passwordProtected
            Attachments {
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          id
        }
      }
    }
  `)
  const { nodes } = data.allAirtable
  const [randomTiles, setRandomTiles] = useState([])
  const width = useWindowWidth()

  let numberOfTiles = 4
  if (width >= 768) {
    numberOfTiles = 4
  } else if (width < 768 && width >= 540) {
    numberOfTiles = 2
  } else {
    numberOfTiles = 1
  }

  //get a random selection of nodes, exluding the node you're currently at. The random number of tiles will change when it hits different screen
  // resolutions.

  useEffect(() => {
    const randoms = nodes
      .filter(node => node.data.Name !== location)
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfTiles)
      .map(selection => (
        <Link
          key={selection.id}
          to={
            selection.data.passwordProtected
              ? `/${selection.data.Name}/`
              : `${selection.data.Name}`
          }
        >
          <GridItem
            isProtected={selection.data.passwordProtected}
            title={selection.data.Name}
            fluid={
              selection.data.Attachments.localFiles[0].childImageSharp.fluid
            }
            isFooter={true}
          />
        </Link>
      ))
    setRandomTiles(randoms)
  }, [numberOfTiles])

  return (
    <>
      <TextWrapper>
        <StyledHTwo style={{ marginTop: "15rem" }}>More Work</StyledHTwo>
      </TextWrapper>
      <FooterContainer>{randomTiles}</FooterContainer>
      <BackWrapper>
        <StyledHTwo>
          <BackText to="/">Back</BackText>
        </StyledHTwo>
      </BackWrapper>
    </>
  )
}

FooterComponent.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string.isRequired,
}

export default FooterComponent
