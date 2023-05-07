import { ThemeOptions } from "@mui/material"

import palette from "./palette"
import shape from "./shape"

const MuiToggleButtonGroup: Required<
  Required<ThemeOptions>["components"]
>["MuiToggleButtonGroup"] = {
  styleOverrides: {
    grouped: {
      border: 0,
      color: palette.grey[500],
      "&.Mui-selected": {
        background: "none",
        color: palette.grey[800],
        pointerEvents: "none"
      },
      "&:not(:first-of-type)": {
        border: 0,
        borderRadius: shape.borderRadius,
        marginLeft: 0
      },
      "&:first-of-type": {
        borderRadius: shape.borderRadius,
      },
    },
  },
}

export default MuiToggleButtonGroup
