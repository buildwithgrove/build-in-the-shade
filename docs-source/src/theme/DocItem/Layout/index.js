import DocItemContent from "@theme/DocItem/Content"
import DocItemFooter from "@theme/DocItem/Footer"
import DocItemPaginator from "@theme/DocItem/Paginator"
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop"
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile"
import DocVersionBadge from "@theme/DocVersionBadge"
import DocVersionBanner from "@theme/DocVersionBanner"
import React from "react"
import { TypographyStylesProvider } from "@mantine/core"
// import DocBreadcrumbs from "@theme/DocBreadcrumbs"
import clsx from "clsx"
import styles from "./styles.module.css"
import { useDoc } from "@docusaurus/plugin-content-docs/client"
import { useWindowSize } from "@docusaurus/theme-common"

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc()
  const windowSize = useWindowSize()
  const hidden = frontMatter.hide_table_of_contents
  const canRender = !hidden && toc.length > 0
  const mobile = canRender ? <DocItemTOCMobile /> : undefined
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined
  return {
    hidden,
    mobile,
    desktop,
  }
}
export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC()
  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            {/* <DocBreadcrumbs /> */}
            <DocVersionBadge />
            {docTOC.mobile}
            <TypographyStylesProvider p={0}>
              <DocItemContent>{children}</DocItemContent>
            </TypographyStylesProvider>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  )
}
