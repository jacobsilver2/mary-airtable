const { graphqlForProjects } = require("./createPages/create-pages-projects.js")
const {
  graphqlForSidenotes,
} = require("./createPages/create-pages-sidenotes.js")

async function createIndividualPages(actions, graphql) {
  const { createPage } = actions
  const promises = [
    graphqlForProjects(graphql, createPage),
    graphqlForSidenotes(graphql, createPage),
  ]
  const results = await Promise.all(promises.map(p => p.catch(e => e)))
  const validResults = results.filter(result => !(result instanceof Error))
  return validResults
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql)
}
