// import { useState, useEffect } from "react"

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window
//   return {
//     width,
//     height,
//   }
// }

// export default function useWindowDimensions() {
//   const isBrowser = typeof window !== "undefined"
//   const [windowDimensions, setWindowDimensions] = useState(
//     isBrowser ? getWindowDimensions() : 0
//   )

//   useEffect(() => {
//     if (!isBrowser) return false

//     function handleResize() {
//       setWindowDimensions(getWindowDimensions())
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])
//   return windowDimensions
// }
