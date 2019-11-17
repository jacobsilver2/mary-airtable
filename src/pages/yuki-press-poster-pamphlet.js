import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/workLayout"
import { renderWorkHtml } from "../utility/renderHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Yuki Press Poster Pamphlet" } }
      sort: { fields: data___Order }
    ) {
      nodes {
        data {
          Name
          Order
          Attachments {
            localFiles {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          Text
          Type
          Link
        }
        id
      }
    }
  }
`

const YukiPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const hero = nodes.filter(node => node.data.Type === "Hero")[0]
  const myhtml = nodes
    .filter(node => node.data.Type !== "Hero")
    .map(node => renderWorkHtml(node))
  return <Layout hero={hero}>{myhtml}</Layout>
}

export default YukiPage
