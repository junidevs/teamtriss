// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("./package.json")


/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"], // Only run ESLint on these directories during production builds (next build)
  },
  experimental: {
    scrollRestoration: true,
  },
  pageExtensions: ["page.tsx", "page.ts", "api.ts"],
  reactStrictMode: true,
  swcMinify: true,
  ...(process.env.NEXT_PUBLIC_DEPLOY_TARGET === "production"
    ? {
      compiler: {
        reactRemoveProperties: true,
        removeConsole: {
          exclude: ["error"],
        },
      },
    }
    : {}),
  poweredByHeader: false,
  typescript: {
    tsconfigPath:
      process.env.NODE_ENV === "production"
        ? "./tsconfig.production.json"
        : "./tsconfig.json",
  },
  publicRuntimeConfig: {
    appVersion: version,
  },
}

module.exports = nextConfig
