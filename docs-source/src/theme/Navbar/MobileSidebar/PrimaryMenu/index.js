import React, { useEffect } from "react"
import PrimaryMenu from "@theme-original/Navbar/MobileSidebar/PrimaryMenu"
import { useNavbarSecondaryMenu } from "@docusaurus/theme-common/internal"
import sidebars from "@site/sidebars"
import Link from "@docusaurus/Link"
import { List } from "@mantine/core"

export default function PrimaryMenuWrapper(props) {
  const secondaryMenu = useNavbarSecondaryMenu()

  const mainLinks = Object.entries(sidebars)

  useEffect(() => {
    if (secondaryMenu.shown === false) {
      secondaryMenu.shown = true
    }
  }, [secondaryMenu])

  return (
    <>
      <List className="menu__list" mb="xl">
        {mainLinks.map(([, sidebar]) => (
          <List.Item key={sidebar[0].dirName} className="menu__list-item">
            <Link className="menu__link" to={sidebar[0].customProps.link}>
              {sidebar[0].customProps.label}
            </Link>
          </List.Item>
        ))}
      </List>
      <PrimaryMenu {...props} />
    </>
  )
}
