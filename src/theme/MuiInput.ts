import { ThemeOptions } from "@mui/material"

const MuiInput: Required<Required<ThemeOptions>["components"]>["MuiInput"] = {
  styleOverrides: {
    underline: {
      "&::before": {
        all: "unset",
      },
      "&::after": {
        all: "unset",
      },
    },
  },
}

export default MuiInput
