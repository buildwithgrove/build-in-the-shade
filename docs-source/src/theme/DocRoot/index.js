import React from "react"
import DocRoot from "@theme-original/DocRoot"
import styles from "./DocRoot.module.css"

export default function DocRootWrapper(props) {
  return (
    <div className={styles.root}>
      <DocRoot {...props} />
    </div>
  )
}
