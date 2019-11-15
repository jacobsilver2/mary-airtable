import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/workLayout"
import { renderWorkHtml } from "../../utility/renderHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "World Population Day Social Media Post" } }
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

const BeirutPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => renderWorkHtml(node))
  return <Layout>{myhtml}</Layout>
}

export default BeirutPage
