import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import useWindowWidth from "../hooks/useWindowWidth"

const FooterContainer = styled.footer`
  display: grid;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 540px) and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 766px) {
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

  const width = useWindowWidth()
  let numberOfTiles = null

  if (width >= 768) {
    numberOfTiles = 4
  } else if (width < 768 && width >= 540) {
    numberOfTiles = 2
  } else {
    numberOfTiles = 1
  }

  const { nodes } = data.allAirtable
  //get a random selection of nodes, exluding the node you're currently at.
  const randoms = nodes
    .filter(node => node.data.Name !== location)
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfTiles)
    .map(selection => (
      <Link to={`/${selection.data.Name}`} key={selection.id}>
        <Img
          fluid={selection.data.Attachments.localFiles[0].childImageSharp.fluid}
        />
      </Link>
    ))

  return (
    <>
      <h2 style={{ marginTop: "15rem" }}>More Work</h2>
      <FooterContainer>{randoms}</FooterContainer>
      <h2 style={{ textAlign: "center" }}>
        <Link to="/">Back To Top</Link>
      </h2>
    </>
  )
}
