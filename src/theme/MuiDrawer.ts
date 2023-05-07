import { ThemeOptions } from "@mui/material"

const MuiDrawer: Required<Required<ThemeOptions>["components"]>["MuiDrawer"] = {
  styleOverrides: {
    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
}

export default MuiDrawer
