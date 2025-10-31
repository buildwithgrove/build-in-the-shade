import React from "react"
import { composeProviders } from "@docusaurus/theme-common"
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from "@docusaurus/theme-common/internal"
import { DocsPreferredVersionContextProvider } from "@docusaurus/plugin-content-docs/client"
import { MantineProvider } from "@mantine/core"
import { portalTheme } from "../../portalTheme"
import "@mantine/core/styles.css"

const Provider = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
])
export default function LayoutProvider({ children }) {
  return (
    <MantineProvider theme={portalTheme}>
      <Provider>{children}</Provider>
    </MantineProvider>
  )
}
