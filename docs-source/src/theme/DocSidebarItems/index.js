import React from "react"
import DocSidebarItems from "@theme-original/DocSidebarItems"
import { Title } from "@mantine/core"

export default function DocSidebarItemsWrapper(props) {
  return (
    <>
      {props?.customProps?.label && (
        <Title order={1} size="h3">
          {props.customProps.label}
        </Title>
      )}
      <DocSidebarItems {...props} />
    </>
  )
}
