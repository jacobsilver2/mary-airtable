import { graphql, Link } from "gatsby"
import React, { useContext } from "react"
import GridItem from "../components/gridItem"
import Layout from "../components/layout"
import useLocalStorage from "../contexts/useLocalStorage"
import GridContainer from "../styles/GridContainer"
import { CTX } from "../components/Nav/NavContext"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "WorkHome" } }
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

const IndexPage = ({ data }) => {
  // Similar to useState but first arg is key to the value in local storage.
  const [url, setUrl] = useLocalStorage("url", "/")
  const [mobileNavState, setMobileNavState] = useContext(CTX)
  const { nodes } = data.allAirtable
  const tiles = nodes.map(node => {
    return (
      <Link
        onClick={e => {
          setUrl(`${node.data.Name}/`)
          setMobileNavState({ isMobileNavFolded: true })
        }}
        key={node.id}
        to={
          node.data.passwordProtected
            ? `/${node.data.Name}/`
            : `/${node.data.Name}`
        }
      >
        <GridItem
          isProtected={node.data.passwordProtected}
          title={node.data.Name}
          fluid={node.data.Attachments.localFiles[0].childImageSharp.fluid}
        />
      </Link>
    )
  })

  return (
    <>
      <Layout>
        <GridContainer>{tiles}</GridContainer>
      </Layout>
    </>
  )
}

export default IndexPage
