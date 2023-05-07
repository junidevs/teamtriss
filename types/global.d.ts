import type { ReactElement, ReactNode } from "react"

import { EmotionCache } from "@emotion/react"
import { DehydratedState, QueryClient } from "@tanstack/react-query"
import type { AxiosError as AxiosErrorExport } from "axios"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { LinkProps } from "next/link"

declare global {
  type ErrorResponseFormat = {
    message: string
    code: string
    context: Record<string, string>
  }

  type ErrorResponse = { errors: ErrorResponseFormat[] }
  type TAllowedLocales = "en" | "pl"

  type BaseResponse<T, Meta = []> = {
    meta: Meta
    data: T
  }

  type ResponseWithMeta<T, M = PaginationObj> = BaseResponse<T, M>

  type ResponseWithPagination<T> = BaseResponse<T, PaginationObj>

  export type NextPageWithLayout<
    P = Record<string, unknown>,
    IP = P
  > = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }

  type AppPageProps = AppProps<{
    dehydratedState?: DehydratedState
  }> & {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache
  }
}

export {}
