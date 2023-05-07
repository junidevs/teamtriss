import { blue } from "@mui/material/colors"

/*
 * Adding new colors - https://material-ui.com/customization/palette/#adding-new-colors
 */
const palette = {
  primary: {
    main: "#175CFF",
    dark: "#144DD2",
    background: "#F5F8FF",
  },
  secondary: {
    main: "#457DFF",
  },
  error: {
    main: "#FF3A5A",
  },
  success: {
    main: "#0CC19B",
  },
  warning: {
    main: "#FF9800",
  },
  info: {
    main: blue[500],
    light: "#C4E0FF",
  },
  common: {
    dark: "#114F76",
  },
  grey: {
    100: "#F4F4FB",
    300: "#DCE2E8",
    400: "#00000087",
    500: "#bdbdbd",
    600: "#ADB2B7",
    700: "#65676B",
    800: "#272727",
    900: "#000000de",
    A400: "#000c30",
  },
  background: {
    default: "#F4F4F9",
  },
}

export default palette
