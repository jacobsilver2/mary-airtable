const { graphqlForProjects } = require("./createPages/create-pages-projects.js")
const {
  graphqlForSidenotes,
} = require("./createPages/create-pages-sidenotes.js")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

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
