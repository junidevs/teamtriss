import { ThemeOptions } from "@mui/material"

import palette from "./palette"

const MuiListItemButton: Required<
  Required<ThemeOptions>["components"]
>["MuiListItemButton"] = {
  styleOverrides: {
    root: {
      "&.Mui-selected": {
        backgroundColor: palette.grey[100],
      },
      "&:hover": {
        backgroundColor: palette.grey[100],
      },
    },
  },
}

export default MuiListItemButton
