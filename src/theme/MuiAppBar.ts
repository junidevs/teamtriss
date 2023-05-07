import { ThemeOptions } from "@mui/material"

const MuiAppBar: Required<Required<ThemeOptions>["components"]>["MuiAppBar"] = {
  styleOverrides: {
    root: {
      backgroundColor: "#ffffff",
    },
  },
}

export default MuiAppBar
