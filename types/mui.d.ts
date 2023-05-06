import React from "react"

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    dark: string
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    minDescription: React.CSSProperties
    paidEntityMeta: React.CSSProperties
    largerDescription: React.CSSProperties
    smallData: React.CSSProperties
    mainForms: React.CSSProperties
    error: React.CSSProperties
    cardHeader?: React.CSSProperties
    cardItemHeader?: React.CSSProperties
    cardItemBalance?: React.CSSProperties
    cardItemBalanceSuffix?: React.CSSProperties
    cardItemHeaderSmall?: React.CSSProperties
    tableColumnName?: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    minDescription?: React.CSSProperties
    paidEntityMeta?: React.CSSProperties
    largerDescription?: React.CSSProperties
    smallData?: React.CSSProperties
    mainForms?: React.CSSProperties
    error?: React.CSSProperties
    cardHeader?: React.CSSProperties
    cardItemHeader?: React.CSSProperties
    cardItemBalance?: React.CSSProperties
    cardItemBalanceSuffix?: React.CSSProperties
    cardItemHeaderSmall?: React.CSSProperties
    tableColumnName?: React.CSSProperties
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
