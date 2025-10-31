import React, { useEffect } from "react"
import ColorModeToggle from "@theme-original/ColorModeToggle"
import { useMantineColorScheme } from "@mantine/core"

export default function ColorModeToggleWrapper(props) {
  // Get the MUI hook
  const { setColorScheme } = useMantineColorScheme()

  // Extract the docusaurus theme from the component properties
  const { value } = props

  // Whenever the theme changes in docusaurus, trigger the change in MUI
  useEffect(() => {
    setColorScheme(value)
  }, [value])

  return (
    <>
      <ColorModeToggle {...props} />
    </>
  )
}
