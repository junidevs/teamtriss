import { createTheme, responsiveFontSizes } from "@mui/material/styles"

import MuiMobileStepper from "@/theme/MuiMobileStepper"

import MuiAppBar from "./MuiAppBar"
import MuiAutocomplete from "./MuiAutocomplete"
import MuiButton from "./MuiButton"
import MuiCardActions from "./MuiCardActions"
import MuiCardContent from "./MuiCardContent"
import MuiCssBaseline from "./MuiCssBaseline"
import MuiDrawer from "./MuiDrawer"
import MuiInput from "./MuiInput"
import MuiInputBase from "./MuiInputBase"
import MuiLink from "./MuiLink"
import MuiListItemButton from "./MuiListItemButton"
import MuiListItemIcon from "./MuiListItemIcon"
import MuiPaginationItem from "./MuiPaginationItem"
import MuiToggleButtonGroup from "./MuiToggleButtonGroup"
import MuiTypography from "./MuiTypography"
import MuiOutlinedInput from './MuiOutlinedInput'
import MuiList from './MuiList'
import MuiPopover from './MuiPopover'
import mixins from "./mixins"
import palette from "./palette"
import shadows from "./shadows"
import shape from "./shape"
import spacing from "./spacing"
import typography from "./typography"

/*
 * Override globals - https://material-ui.com/customization/globals/#globals
 */
const theme = createTheme({
  mixins,
  palette,
  shape,
  shadows,
  spacing,
  typography,
  components: {
    MuiAppBar,
    MuiAutocomplete,
    MuiButton,
    MuiCardActions,
    MuiCardContent,
    MuiDrawer,
    MuiInput,
    MuiInputBase,
    MuiLink,
    MuiListItemButton,
    MuiListItemIcon,
    MuiMobileStepper,
    MuiPaginationItem,
    MuiToggleButtonGroup,
    MuiTypography,
    MuiCssBaseline,
    MuiOutlinedInput,
    MuiPopover,
    MuiList,
  },
})

// TODO: find better way to change font sizes on these fonts
const responsiveBaseFonts = {
  [theme.breakpoints.down("md")]: {
    fontSize: ".9rem",
  },
}

const themeWithResponsiveFontSizes = responsiveFontSizes(theme, {
  breakpoints: ["xs", "sm"],
})

themeWithResponsiveFontSizes.typography.body1 = {
  ...theme.typography.body1,
  ...responsiveBaseFonts,
}
themeWithResponsiveFontSizes.typography.body2 = {
  ...theme.typography.body2,
  ...responsiveBaseFonts,
}

export default themeWithResponsiveFontSizes

export const drawerWidth = 300
