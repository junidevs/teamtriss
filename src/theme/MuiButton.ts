import { ThemeOptions } from "@mui/material"

import spacing from "./spacing"

const MuiButton: Required<Required<ThemeOptions>["components"]>["MuiButton"] = {
  styleOverrides: {
    root: {
      height: 40
    },
    contained: {
      borderRadius: 20,
    },
    endIcon: {
      ml: spacing(6),
    },
  },
}

export default MuiButton
