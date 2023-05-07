import { ReactElement, useState } from "react"

import { CacheProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { Hydrate, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"

import AppWrapper from "@/AppWrapper"
import useToggleReactQueryClient from "@/hooks/useToggleReactQueryClient"
import reactQueryClientOptions from "@/reactQueryClientOptions"
import "@/styles/imageComponent.css"
import palette from "@/theme/palette"
import { createEmotionCache } from "@/utils/emotionCache"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("@/mocks/backend-api").then((module) => module.initMocks())
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPageProps) => {
  const [reactQueryClient, setReactQueryClient] = useState(
    () => new QueryClient(reactQueryClientOptions)
  )

  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useToggleReactQueryClient(setReactQueryClient)
  }

  const { getLayout = (page: ReactElement) => page } = Component

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppWrapper reactQueryClient={reactQueryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CssBaseline />
          <NextNProgress color={palette.primary.main} />
          {getLayout(<Component {...pageProps} />)}

          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </Hydrate>
      </AppWrapper>
    </CacheProvider>
  )
}

export default App
