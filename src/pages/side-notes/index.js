import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../../components/mainLayout"
import GridItem from "../../components/gridItem"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "SideNotesHome" } }
      sort: { fields: data___Order }
    ) {
      nodes {
        data {
          Name
          url
          Order
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
      <GridItem
        key={node.id}
        isProtected={node.data.passwordProtected}
        title={node.data.Name}
        fluid={node.data.Attachments.localFiles[0].childImageSharp.fluid}
        url={node.data.url}
      />
    )
  })

  return <MainLayout>{tiles}</MainLayout>
}

export default IndexPage
