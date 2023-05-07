import { ThemeOptions } from "@mui/material"
import palette from "./palette"

const MuiPopover: Required<
  Required<ThemeOptions>["components"]
>["MuiPopover"] = {
  styleOverrides: {
    paper: {
      boxShadow: 'none',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: palette.grey[300],
      marginTop: 6,
      marginBottom: 6
    },
  },
}

export default MuiPopover
