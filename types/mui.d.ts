import { CSSProperties } from "react"

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    dark: string
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    minDescription: CSSProperties
    paidEntityMeta: CSSProperties
    largerDescription: CSSProperties
    smallData: CSSProperties
    mainForms: CSSProperties
    error: CSSProperties
    cardHeader?: CSSProperties
    cardItemHeader?: CSSProperties
    cardItemBalance?: CSSProperties
    cardItemBalanceSuffix?: CSSProperties
    cardItemHeaderSmall?: CSSProperties
    tableColumnName?: CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    minDescription?: CSSProperties
    paidEntityMeta?: CSSProperties
    largerDescription?: CSSProperties
    smallData?: CSSProperties
    mainForms?: CSSProperties
    error?: CSSProperties
    cardHeader?: CSSProperties
    cardItemHeader?: CSSProperties
    cardItemBalance?: CSSProperties
    cardItemBalanceSuffix?: CSSProperties
    cardItemHeaderSmall?: CSSProperties
    tableColumnName?: CSSProperties
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    minDescription: true
    paidEntityMeta: true
    smallData: true
    mainForms: true
    error: true
    cardHeader: true
    cardItemHeader: true
    cardItemBalance: true
    cardItemBalanceSuffix: true
    cardItemHeaderSmall: true
    tableColumnName: true
    largerDescription: true
  }
}
