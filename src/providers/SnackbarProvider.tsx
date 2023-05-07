import { createRef, ReactNode } from "react"

import CloseIcon from "@mui/icons-material/Close"
import { GlobalStyles } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material/styles"
import useTranslation from "next-translate/useTranslation"
import { SnackbarKey } from "notistack"
import { SnackbarProvider as NotistackSnackbarProvider } from "notistack"

export type TSnackbarProvider = {
  children: ReactNode
}

export const SnackbarProvider = ({ children }: TSnackbarProvider) => {
  const { t } = useTranslation()
  const theme = useTheme()

  const notistackRef = createRef<NotistackSnackbarProvider>()
  const onClickDismiss = (key: SnackbarKey) => () => {
    notistackRef.current?.closeSnackbar(key)
  }

  const infoIconVariant = (
    <Stack alignItems="center" color="white" mr={3}>
      Info
    </Stack>
  )
  const successIconVariant = (
    <Stack alignItems="center" color="white" mr={3}>
      Success
    </Stack>
  )
  const warningIconVariant = (
    <Stack alignItems="center" color="white" mr={3}>
      Warn
    </Stack>
  )
  const notistackStyles = {
    ".SnackbarItem-variantError": {
      backgroundColor: theme.palette.error.main,
    },
    ".SnackbarItem-variantWarning": {
      backgroundColor: theme.palette.warning.main,
    },
    ".SnackbarItem-variantSuccess": {
      backgroundColor: theme.palette.success.main,
    },
    ".SnackbarItem-variantInfo": {
      backgroundColor: theme.palette.info.main,
    },
  }

  return (
    <>
      <NotistackSnackbarProvider
        ref={notistackRef}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        iconVariant={{
          default: infoIconVariant,
          success: successIconVariant,
          info: infoIconVariant,
          warning: warningIconVariant,
          error: infoIconVariant,
        }}
        autoHideDuration={3000}
        action={(key) => (
          <IconButton
            onClick={onClickDismiss(key)}
            aria-label={t("close")}
            size="small"
          >
            <CloseIcon fontSize="small" color="inherit" />
          </IconButton>
        )}
      >
        {children}
      </NotistackSnackbarProvider>
      <GlobalStyles styles={notistackStyles} />
    </>
  )
}
