const path = require("path")
const slash = require("slash")

function createSidenotesPages(result, createPage) {
  const projectPostTemplate = path.join(
    __dirname,
    `../src/templates/project.js`
  )
  const sidenotesPosts = result.data.sidenotes.nodes
  sidenotesPosts.forEach(node => {
    createPage({
      path: `/side-notes/${node.data.Name}`,
      component: slash(projectPostTemplate),
      context: {
        name: node.data.Name,
      },
    })
  })
}

function graphqlForSidenotes(graphql, createPage) {
  return graphql(`
    {
      sidenotes: allAirtable(
        filter: { table: { eq: "SideNotesHome" } }
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
    createSidenotesPages(result, createPage)
  })
}

exports.graphqlForSidenotes = graphqlForSidenotes
