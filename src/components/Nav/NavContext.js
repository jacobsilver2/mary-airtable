import React, { createContext, useState } from "react"

export const CTX = createContext()

export default function NavStore(props) {
  const navStateHook = useState({ isMobileNavFolded: true, activePath: "/" })
  return <CTX.Provider value={navStateHook}>{props.children}</CTX.Provider>
}
