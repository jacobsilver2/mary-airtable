const path = require("path")
const slash = require("slash")

function createProjectPages(result, createPage) {
  const projectPostTemplate = path.join(
    __dirname,
    `../src/templates/project.js`
  )
  const projectPosts = result.data.projects.nodes
  projectPosts.forEach(node => {
    const { Name } = node.data
    createPage({
      path: `/${Name}`,
      component: slash(projectPostTemplate),
      context: {
        name: Name,
        type: "project",
      },
    })
  })
}

function graphqlForProjects(graphql, createPage) {
  return graphql(`
    {
      projects: allAirtable(
        filter: { table: { eq: "WorkHome" } }
        sort: { fields: data___Order }
      ) {
        nodes {
          data {
            Name
            Order
            Attachments {
              localFiles {
                childImageSharp {
                  fluid {
                    aspectRatio
                    base64
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    tracedSVG
                  }
                }
              }
            }
          }
          id
        }
      }
    }
  `).then(result => {
    if (result.erros) {
      throw result.errors
    }
    createProjectPages(result, createPage)
  })
}

exports.graphqlForProjects = graphqlForProjects
