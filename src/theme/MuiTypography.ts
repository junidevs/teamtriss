import { ThemeOptions } from "@mui/material"

import spacing from "./spacing"

const MuiTypography: Required<
  Required<ThemeOptions>["components"]
>["MuiTypography"] = {
  styleOverrides: {
    gutterBottom: {
      marginBottom: spacing(4),
    },
  },
}

export default MuiTypography
