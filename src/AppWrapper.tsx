import { ElementType, memo, ReactElement, useMemo } from "react"

import { enUS, plPL } from "@mui/material/locale"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { QueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { SnackbarProvider } from "@/providers/SnackbarProvider"
import QueryClientProvider from "@/providers/QueryClientProvider/QueryClientProvider"
import { NotificationsUIProvider } from "@/providers/NotificationsUIProvider"
import theme from "@/theme"

type AppWrapperProps = {
  reactQueryClient: QueryClient
  children: ReactElement
}

const nextToMaterialLocaleMap = {
  en: enUS,
  pl: plPL,
}

type ElementTypeWithChildren = ElementType<{ children: ReactElement }>

const combineComponents = (
  ...components: ElementTypeWithChildren[]
): ElementTypeWithChildren => {
  return components.reduce(
    (AccComponent, CurrentComponent) => {
      return function CombinedComponent({ children }) {
        return (
          <AccComponent>
            <CurrentComponent>{children}</CurrentComponent>
          </AccComponent>
        )
      }
    },
    ({ children }) => children
  )
}

const AppWrapper = ({ children, reactQueryClient }: AppWrapperProps) => {
  const router = useRouter()
  // do not allow to use 'default' as the locale value
  const locale = (
    router.locale === "default" ? "en" : router.locale
  ) as TAllowedLocales

  const themeWithMaterialLocale = useMemo(
    () =>
      createTheme(
        theme,
        nextToMaterialLocaleMap[locale] ?? nextToMaterialLocaleMap.en
      ),
    [locale]
  )

  const AppProvider = useMemo(
    () =>
      combineComponents(
        (props) => <ThemeProvider theme={themeWithMaterialLocale} {...props} />,
        SnackbarProvider,
        (props) => (
          <QueryClientProvider reactQueryClient={reactQueryClient} {...props} />
        ),
        NotificationsUIProvider
      ),
    [reactQueryClient, themeWithMaterialLocale]
  )

  return <AppProvider>{children}</AppProvider>
}

export default memo(AppWrapper)
