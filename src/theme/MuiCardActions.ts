import { ThemeOptions } from "@mui/material"

import spacing from "./spacing"

const MuiCardActions: Required<
  Required<ThemeOptions>["components"]
>["MuiCardActions"] = {
  styleOverrides: {
    root: {
      padding: `${spacing(6)} ${spacing(12)}`,
    },
  },
}

export default MuiCardActions
