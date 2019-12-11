import axios from "axios"
import React, { useEffect, useState } from "react"
import WorkContainerComponent from "../../components/workContainer"
import { cmhr } from "../../utility/airtableUrls"
import { renderWorkHtml } from "../../utility/renderHtml"

const CMHRPage = () => {
  const [nodes, setNodes] = useState([])
  useEffect(() => {
    axios.get(cmhr).then(response => {
      setNodes(response.data.records)
    })
  }, [])

  const hero = nodes.filter(node => node.fields.Type === "Hero")[0]
  const myhtml = nodes
    .filter(node => node.fields.Type !== "Hero")
    .map(node => renderWorkHtml(node))
  return <WorkContainerComponent hero={hero}>{myhtml}</WorkContainerComponent>
}

export default CMHRPage
