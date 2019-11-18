import React from "react"
import { graphql } from "gatsby"
import GridItem from "../components/gridItem"
import GridContainer from "../styles/GridContainer"
import Layout from "../components/layout"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "WorkHome" } }
      sort: { fields: data___order }
    ) {
      nodes {
        data {
          Name
          url
          order
          passwordProtected
          Attachments {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 1024) {
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
`

const IndexPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const tiles = nodes.map(node => {
    return (
      <>
        <GridItem
          key={node.id}
          isProtected={node.data.passwordProtected}
          title={node.data.Name}
          fluid={node.data.Attachments.localFiles[0].childImageSharp.fluid}
          url={node.data.url}
        />
      </>
    )
  })

  return (
    <Layout>
      <GridContainer>{tiles}</GridContainer>
    </Layout>
  )
}

export default IndexPage
