import React from "react"
import NavStore from "./src/components/Nav/NavContext"

export const wrapRootElement = ({ element }) => {
  return <NavStore>{element}</NavStore>
}
