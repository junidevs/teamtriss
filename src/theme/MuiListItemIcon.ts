import { ThemeOptions } from "@mui/material"

const MuiListItemIcon: Required<
  Required<ThemeOptions>["components"]
>["MuiListItemIcon"] = {
  styleOverrides: {
    root: {
      minWidth: "unset",
    },
  },
}
export default MuiListItemIcon
