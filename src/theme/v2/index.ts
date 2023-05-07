import { createTheme } from "@mui/material/styles"
import themeV1 from ".."

import MuiButton from "./MuiButton"

/*
 * Override globals - https://material-ui.com/customization/globals/#globals
 */
const theme = createTheme({
    ...themeV1,
    components: {
        ...themeV1.components,
        MuiButton
    }
})

export default theme
