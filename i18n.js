module.exports = {
  locales: ["default", "en", "pl"],
  defaultLocale: "default",
  pages: {
    "*": ["common"],
    "/": ["common"],
  },
  defaultNS: "common",
  extensionsRgx: /\.(page.tsx|page.jsx)$/,
  keySeparator: false,
}
