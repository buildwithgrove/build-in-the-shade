import clsx from "clsx"
import React, { useMemo } from "react"
import useIsBrowser from "@docusaurus/useIsBrowser"
import Layout from "@theme-original/DocRoot/Layout"
import { Box, Group } from "@mantine/core"
import styles from "./DocRootLayout.module.css"
import sidebars from "@site/sidebars"
import Link from "@docusaurus/Link"

export default function LayoutWrapper(props) {
  const isBrowser = useIsBrowser()

  let paths

  if (isBrowser) {
    paths = window.location.pathname.split("/")
  }
  const path = useMemo(() => {
    if (paths) {
      return paths[1]
    }
  }, [paths])

  const mainLinks = Object.entries(sidebars).filter(
    ([key]) => key === "guides" || key === "groveApi",
  ).sort(([keyA], [keyB]) => {
    // Define the desired order: guides first, then groveApi
    const order = { guides: 0, groveApi: 1 };
    return order[keyA] - order[keyB];
  })

  const exploreGroveLink = Object.entries(sidebars).find(
    ([key]) => key === "exploreGrove"
  )


  return (
    <>
      <Box className={styles.subnav} px="md">
        <Group justify="flex-start">
          {mainLinks.map(([sidebarKey, sidebar]) => (
            <Link
              key={sidebar[0].dirName}
              className={clsx(
                styles.link,
                path === sidebar[0].dirName && styles.linkActive,
              )}
              to={sidebar[0].customProps.link}
            >
              {sidebar[0].customProps.label}
            </Link>
          ))}
          <Link
            className={clsx(
              styles.link,
              path === "service-catalogue" && styles.linkActive,
            )}
            to="/service-catalogue"
          >
            Service Catalogue
          </Link>
          {exploreGroveLink && (
            <Link
              key={exploreGroveLink[1][0].dirName}
              className={clsx(
                styles.link,
                path === exploreGroveLink[1][0].dirName && styles.linkActive,
              )}
              to={exploreGroveLink[1][0].customProps.link}
            >
              {exploreGroveLink[1][0].customProps.label}
            </Link>
          )}
        </Group>
      </Box>

      <Layout {...props} />
    </>
  )
}
