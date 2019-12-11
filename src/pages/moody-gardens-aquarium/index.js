import axios from "axios"
import React, { useEffect, useState } from "react"
import WorkContainerComponent from "../../components/workContainer"
import { moody } from "../../utility/airtableUrls"
import { renderWorkHtml } from "../../utility/renderHtml"

const MoodyGardensPage = props => {
  const [nodes, setNodes] = useState([])
  useEffect(() => {
    axios.get(moody).then(response => {
      setNodes(response.data.records)
    })
  }, [])

  const hero = nodes.filter(node => node.fields.Type === "Hero")[0]
  const myhtml = nodes
    .filter(node => node.fields.Type !== "Hero")
    .map(node => renderWorkHtml(node))
  return <WorkContainerComponent hero={hero}>{myhtml}</WorkContainerComponent>
}

export default MoodyGardensPage
