import { ThemeOptions } from "@mui/material"

const MuiPaginationItem: Required<
  Required<ThemeOptions>["components"]
>["MuiPaginationItem"] = {
  styleOverrides: {
    root: {
      fontSize: ".75rem",
    },
  },
}

export default MuiPaginationItem
