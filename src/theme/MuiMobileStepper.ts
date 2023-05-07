import { ThemeOptions } from "@mui/material"

const MuiMobileStepper: Required<
  Required<ThemeOptions>["components"]
>["MuiMobileStepper"] = {
  styleOverrides: {
    root: {
      backgroundColor: "unset",
      "& .MuiButton-root": {
        minWidth: 0,
        py: 8
      }
    },
  },
}

export default MuiMobileStepper
