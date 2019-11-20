import React, { createContext, useState } from "react"

export const CTX = createContext()

export default function UrlStore(props) {
  const urlStateHook = useState({ currentUrl: "/" })
  return <CTX.Provider value={urlStateHook}>{props.children}</CTX.Provider>
}
