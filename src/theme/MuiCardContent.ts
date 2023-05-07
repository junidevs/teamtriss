import { ThemeOptions } from "@mui/material"

import palette from "./palette"
import spacing from "./spacing"

const MuiCardContent: Required<
  Required<ThemeOptions>["components"]
>["MuiCardContent"] = {
  styleOverrides: {
    root: {
      borderBottom: `${spacing(1)} solid ${palette.background.default}`,
      borderTop: `${spacing(1)} solid ${palette.background.default}`,
      borderRadius: "unset",
    },
  },
}

export default MuiCardContent
