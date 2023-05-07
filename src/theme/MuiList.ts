import { ThemeOptions } from "@mui/material"

const MuiList: Required<
  Required<ThemeOptions>["components"]
>["MuiList"] = {
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    },
  },
}

export default MuiList
