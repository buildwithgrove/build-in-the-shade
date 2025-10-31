import React from "react"
import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import isInternalUrl from "@docusaurus/isInternalUrl"
import { isRegexpStringMatch } from "@docusaurus/theme-common"
// import IconExternalLink from "@theme/Icon/ExternalLink"
import { Button } from "@mantine/core"
export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}) {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to)
  const activeBaseUrl = useBaseUrl(activeBasePath)
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true })
  // const isExternalLink = label && href && !isInternalUrl(href)

  // Link content is set through html XOR label
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            {label}
            {/* {isExternalLink && (
              <IconExternalLink {...(isDropdownLink && { width: 12, height: 12 })} />
            )} */}
          </>
        ),
      }

  const actionProps = href
    ? {
        href: prependBaseUrlToHref ? normalizedHref : href,
      }
    : {
        to: toUrl,
        isNavLink: true,
        ...((activeBasePath || activeBaseRegex) && {
          isActive: (_match, location) =>
            activeBaseRegex
              ? isRegexpStringMatch(activeBaseRegex, location.pathname)
              : location.pathname.startsWith(activeBaseUrl),
        }),
      }

  if (props.className && props.className.includes("buttonLink")) {
    return <Button component={Link} {...actionProps} {...props} {...linkContentProps} />
  }

  return <Link {...actionProps} {...props} {...linkContentProps} />
}
