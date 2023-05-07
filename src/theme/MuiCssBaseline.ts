import { ThemeOptions } from "@mui/material"

import palette from "./palette"

const MuiCssBaseline: Required<
  Required<ThemeOptions>["components"]
>["MuiCssBaseline"] = {
  styleOverrides: {
    ".SnackbarItem-variantSuccess": {
      backgroundColor: `${palette.success.main} !important`,
    },
    ".SnackbarItem-variantError": {
      backgroundColor: `${palette.error.main} !important`,
    },
    ".SnackbarItem-variantWarning": {
      backgroundColor: `${palette.warning.main} !important`,
    },
    ".SnackbarItem-variantInfo": {
      backgroundColor: `${palette.info.main} !important`,
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: palette.grey["600"],
      borderRadius: "10px",
    },
    "::-webkit-scrollbar": {
      width: "10px",
    },
    ":root": {
      "--menu-width": "260px",
      "--menu-small-width": "54px"
    },
  },
}

export default MuiCssBaseline
