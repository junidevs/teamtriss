import { ThemeOptions } from "@mui/material"

import spacing from "@/theme/spacing"

import typography from "./typography"

const MuiInputBase: Required<
  Required<ThemeOptions>["components"]
>["MuiInputBase"] = {
  styleOverrides: {
    root: {
      paddingTop: `${spacing(2.5)}`,
      paddingRight: `0`,
      paddingBottom: `${spacing(2.5)}`,
      paddingLeft: `0`,
    },
    input: {
      ...typography.mainForms,
    },
  },
}

export default MuiInputBase
