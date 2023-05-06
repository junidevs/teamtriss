import React, { ForwardedRef, forwardRef } from "react"

import { UrlObject } from "url"



const ignoredModules = ["next/server"].join("|")

// eslint-disable-next-line @typescript-eslint/no-var-requires,jest/require-hook
require("ts-node").register({
  transpileOnly: true,
  ignore: [`node_modules/(?!${ignoredModules})`],
  // Do not add custom tsconfig here, it is managed under root tsconfig.json
})

jest.doMock("next/link", () =>
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      {
        children,
        href = "",
        ...props
      }: { props: unknown[]; href: string | UrlObject; children: JSX.Element },
      ref: ForwardedRef<HTMLAnchorElement>
    ) => {
      if (typeof href === "object") {
        if (Object.keys(href.query as Record<string, string>).length > 0) {
          return React.createElement(
            "a",
            {
              ...props,
              ref,
              href: `${href.pathname}?${new URLSearchParams(
                href.query as Record<string, string>
              ).toString()}`,
            },
            children
          )
        }

        return React.createElement(
          "a",
          {
            ...props,
            ref,
            href: `${href.pathname}`,
          },
          children
        )
      }

      return React.createElement(
        "a",
        {
          ...props,
          ref,
          href,
        },
        children
      )
    }
  )
)

// We need this to use EventSource API in SSR mode and in the tests.
// eslint-disable-next-line jest/require-hook
Object.defineProperty(global, "EventSource", {
  get: () => EventSource,
})

// eslint-disable-next-line jest/require-hook
Object.defineProperty(global, "scrollTo", {
  value: jest.fn(),
})

// We need this to use scrollIntoView in the tests.
HTMLElement.prototype.scrollIntoView = () => null
