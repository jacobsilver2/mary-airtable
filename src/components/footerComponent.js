import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import Img from "gatsby-image"

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export default () => {
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
  console.log(nodes)
  const randoms = data.allAirtable.nodes
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
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
