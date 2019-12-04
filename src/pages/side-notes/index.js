import { graphql, Link } from "gatsby"
import React from "react"
import GridItem from "../../components/gridItem"
import GridContainer from "../../styles/GridContainer"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "SideNotesHome" } }
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

const SideNotesIndexPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const tiles = nodes.map(node => {
    return (
      <Link key={node.id} to={`/side-notes/${node.data.Name}`}>
        <GridItem
          isProtected={node.data.passwordProtected}
          title={node.data.Name}
          fluid={node.data.Attachments.localFiles[0].childImageSharp.fluid}
          url={`/${node.data.Title}`}
        />
      </Link>
    )
  })

  return <GridContainer>{tiles}</GridContainer>
}

export default SideNotesIndexPage
