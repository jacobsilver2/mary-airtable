import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
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

export default ({ location }) => {
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

  let numberOfTiles = null
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
      <h2 style={{ textAlign: "center" }}>
        <Link to="/">Back To Top</Link>
      </h2>
    </>
  )
}
