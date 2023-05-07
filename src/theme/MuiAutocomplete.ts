import { ThemeOptions } from "@mui/material"

import spacing from "./spacing"
import typography from "./typography"

const MuiAutocomplete: Required<
  Required<ThemeOptions>["components"]
>["MuiAutocomplete"] = {
  styleOverrides: {
    inputRoot: {
      '&[class*="MuiInput-root"]': {
        paddingBottom: 6,
      },
    },
    paper: {
      ...typography.mainForms,
    },
    option: {
      paddingTop: spacing(4),
      paddingBottom: spacing(4),
    },
    popupIndicator: {
      color: "grey.300",
    },
  },
}

export default MuiAutocomplete
