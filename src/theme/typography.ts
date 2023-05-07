import { TypographyOptions } from "@mui/material/styles/createTypography"
import { Mulish } from "next/font/google"

const mulish = Mulish({
  subsets: ["latin"],
  display: "block",
})

const typography: TypographyOptions = {
  fontFamily: mulish.style.fontFamily,
  body1: {
    /* Stands for paragraph with regular font weight variant */
    fontSize: "1rem",
  },
  body2: {
    /* Stands for paragraph with semi-bold font weight variant */
    fontSize: "1rem",
    fontWeight: 500,
  },
  paidEntityMeta: {
    fontSize: "1rem",
    fontWeight: 600,
  },
  error: {
    fontSize: "1rem",
    fontWeight: 800,
  },
  h1: {
    fontSize: "1.75rem",
    fontWeight: 800,
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 800,
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: 800,
  },
  h4: {
    fontSize: "1.125rem",
    fontWeight: 800,
  },
  h5: {
    fontSize: "1rem",
    fontWeight: 800,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 800,
  },
  button: {
    fontSize: ".8rem",
    fontWeight: 800,
  },
  mainForms: {
    fontSize: ".93rem",
  },
  minDescription: {
    fontSize: ".75rem",
    fontWeight: 600,
  },
  largerDescription: {
    fontSize: ".80rem",
    fontWeight: 800,
  },
  smallData: {
    fontSize: ".64rem",
    fontWeight: 600,
  },
  cardHeader: {
    fontSize: 16,
    letterSpacing: 1.28,
    fontWeight: "800",
  },
  cardItemHeader: {
    fontSize: 16,
    letterSpacing: 1.28,
    fontWeight: "800",
  },
  cardItemBalance: {
    fontSize: 24,
    letterSpacing: 1.92,
    fontWeight: "800",
  },
  cardItemBalanceSuffix: {
    fontSize: 12.8,
    fontWeight: "800",
    color: "grey.700",
    textTransform: "uppercase",
  },
  cardItemHeaderSmall: {
    fontSize: 12.8,
    fontWeight: "800",
    color: "grey.800",
  },
  tableColumnName: {
    fontSize: 12,
    fontWeight: 600,
    color: "grey.A400",
  },
}

export default typography
