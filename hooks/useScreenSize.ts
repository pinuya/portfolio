import { useEffect, useState } from "react"

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export default function useScreenSize() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const lessThan = (key: keyof typeof breakpoints) => {
    return width < breakpoints[key]
  }

  return { width, lessThan }
}
