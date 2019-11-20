import axios from "axios"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import WorkContainer from "../../components/workContainer"
import { cmhr } from "../../utility/airtableUrls"
import { isAuthenticated, login } from "../../utility/auth"
import { renderWorkHtml } from "../../utility/renderHtml"

const CMHRPage = () => {
  const [nodes, setNodes] = useState([])
  useEffect(() => {
    axios.get(cmhr).then(response => {
      setNodes(response.data.records)
    })
  }, [])
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const hero = nodes.filter(node => node.fields.Type === "Hero")[0]
  const myhtml = nodes
    .filter(node => node.fields.Type !== "Hero")
    .map(node => renderWorkHtml(node))
  return (
    <Layout>
      <WorkContainer hero={hero}>{myhtml}</WorkContainer>
    </Layout>
  )
}

export default CMHRPage
