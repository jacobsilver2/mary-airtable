import React, { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../../components/layout"
import WorkContainer from "../../components/workContainer"
import { renderWorkHtml } from "../../utility/renderHtml"
import { login, isAuthenticated } from "../../utility/auth"
import { melab } from "../../utility/airtableUrls"

const MelabPage = () => {
  const [nodes, setNodes] = useState([])
  useEffect(() => {
    axios.get(melab).then(response => {
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

export default MelabPage
