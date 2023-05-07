import { forwardRef } from "react"

import NextLink, { LinkProps } from "next/link"

// eslint-disable-next-line react/display-name
const ComposableLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <NextLink ref={ref} {...props} />
)

export default ComposableLink
