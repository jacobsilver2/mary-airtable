import axios from "axios"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import WorkContainerComponent from "../../components/workContainer"
import { melab } from "../../utility/airtableUrls"
import { isAuthenticated, login } from "../../utility/auth"
import { renderWorkHtml } from "../../utility/renderHtml"

const MelabPage = props => {
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
      <WorkContainerComponent hero={hero}>{myhtml}</WorkContainerComponent>
    </Layout>
  )
}

export default MelabPage
