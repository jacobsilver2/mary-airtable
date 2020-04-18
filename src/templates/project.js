import PropTypes from "prop-types"
import { graphql } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import ProjectsContainer from "../components/ProjectsContainer"
import { renderWorkHtml } from "../utility/renderHtml"
import { TextContainer } from "../styles/StyledHtml"

const ProjectTemplate = props => {
  const { type } = props.pageContext
  const { nodes } = props.data.allAirtable
  const hero = nodes.filter(node => node.data.Type === "Hero")[0]
  const title = nodes.filter(node => node.data.Type === "h1")[0].Text
  const myhtmlText = nodes
    .filter(
      node =>
        node.data.Type !== "Hero" &&
        node.data.Type !== "Image" &&
        node.data.Type !== "gif" &&
        node.data.Type !== "Video"
    )
    .map(node => renderWorkHtml(node))

  const myhtmlMedia = nodes
    .filter(
      node =>
        node.data.Type !== "Hero" &&
        node.data.Type !== "h1" &&
        node.data.Type !== "h2" &&
        node.data.Type !== "Paragraph" &&
        node.data.Type !== "Small-Text"
    )
    .map(node => renderWorkHtml(node))

  return (
    <>
      <Helmet title={title} />
      <ProjectsContainer
        type={type}
        location={props.pageContext.name}
        hero={hero}
      >
        <TextContainer>{myhtmlText}</TextContainer>
        {myhtmlMedia}
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
