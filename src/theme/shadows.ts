import { ThemeOptions } from "@mui/material"

/*
 * We can not use these smaller set of shadows, we have to satisfy Shadows type.
 */
// const shadowsFromDesignSystem = [
//   "none",
//   "0px 1px 2px #00000059",
//   "0px 2px 3px #00000059",
//   "0px 3px 3px #00000061",
//   "0px 4px 4px #00000061",
//   "0px 5px 6px #00000061",
//   "0px 6px 5px #00000061",
//   "0px 6px 8px #0000006B",
//   "0px 8px 10px #00000073",
//   "0px 8px 15px #00000080",
//   "0px 8px 20px #00000099",
// ]

const shadows: Required<ThemeOptions>["shadows"] = [
  "none",
  "0px 1px 2px #00000059",
  "0px 2px 3px #00000059",
  "0px 3px 3px #00000061",
  "0px 4px 4px #00000061",
  "0px 5px 4px #00000061",
  "0px 5px 6px #00000061",
  "0px 6px 5px #00000061",
  "0px 6px 6px #00000061",
  "0px 6px 7px #00000061",
  "0px 6px 8px #0000006B",
  "0px 7px 9px #0000006B",
  "0px 8px 10px #00000073",
  "0px 8px 11px #00000073",
  "0px 8px 12px #00000073",
  "0px 8px 14px #00000073",
  "0px 8px 15px #00000080",
  "0px 8px 16px #00000080",
  "0px 8px 17px #00000080",
  "0px 8px 18px #00000080",
  "0px 8px 19px #00000080",
  "0px 8px 20px #00000080",
  "0px 8px 21px #00000080",
  "0px 8px 22px #00000080",
  "0px 8px 23px #00000099",
]

export default shadows
