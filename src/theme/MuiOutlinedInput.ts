import { ThemeOptions } from "@mui/material"

import palette from "./palette"

const MuiOutlinedInput: Required<
  Required<ThemeOptions>["components"]
>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      boxShadow: "none",
      backgroundColor: "white",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: palette.grey[300],
    },
    input: {
      paddingTop: 6,
      paddingBottom: 6,
    },
  },
}

export default MuiOutlinedInput
