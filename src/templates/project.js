import PropTypes from "prop-types"
import { graphql } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import ProjectsContainer from "../components/ProjectsContainer"
import { renderWorkHtml } from "../utility/renderHtml"

const ProjectTemplate = props => {
  const { type } = props.pageContext
  const { nodes } = props.data.allAirtable
  const hero = nodes.filter(node => node.data.Type === "Hero")[0]
  const title = nodes.filter(node => node.data.Type === "h1")[0].Text
  const myhtml = nodes
    .filter(node => node.data.Type !== "Hero")
    .map(node => renderWorkHtml(node))

  return (
    <>
      <Helmet title={title} />
      <ProjectsContainer
        type={type}
        location={props.pageContext.name}
        hero={hero}
      >
        {myhtml}
      </ProjectsContainer>
    </>
  )
}

ProjectTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
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
                fluid(quality: 100) {
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
