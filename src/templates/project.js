import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import WorkContainerComponent from "../components/workContainer"
import { renderWorkHtml } from "../utility/renderHtml"

const ProjectTemplate = props => {
  const { nodes } = props.data.allAirtable
  const hero = nodes.filter(node => node.data.Type === "Hero")[0]
  const title = nodes.filter(node => node.data.Type === "h1")[0].Text
  const myhtml = nodes
    .filter(node => node.data.Type !== "Hero")
    .map(node => renderWorkHtml(node))

  return (
    <>
      <Layout>
        <Helmet title={title} />
        <WorkContainerComponent hero={hero}>{myhtml}</WorkContainerComponent>
      </Layout>
    </>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($name: String!) {
    allAirtable(
      filter: { table: { eq: $name } }
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
