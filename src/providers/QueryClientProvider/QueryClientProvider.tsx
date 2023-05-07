import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query"
import axios from "axios"
import useTranslation from "next-translate/useTranslation"
import { useSnackbar } from "notistack"

export type TQueryClientProviderProps = {
  reactQueryClient: QueryClient
  children: JSX.Element
}

const QueryClientProvider = ({
  children,
  reactQueryClient,
}: TQueryClientProviderProps) => {
  const snackbar = useSnackbar()
  const { t } = useTranslation()

  /* eslint-disable no-console */
  const onErrorHandler = (error: unknown) => {
    // check if it actually is axios error
    if (axios.isAxiosError(error)) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response) {
        // error obj is an array
        if (Array.isArray(error.response.data.errors)) {
          error.response.data.errors.forEach((error: ErrorResponseFormat) => {
            snackbar.enqueueSnackbar(error.message, {
              variant: "error",
            })
          })
          // error obj is not an array
        } else {
          snackbar.enqueueSnackbar(
            error.response.data.message ?? t("sbm-error"),
            {
              variant: "error",
            }
          )
        }

        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", (error as Error)?.message)
      }
      console.log(error.config)
    }
  }
  /* eslint-enable no-console */

  reactQueryClient.setDefaultOptions({
    queries: {
      ...reactQueryClient.getDefaultOptions().queries,
      onError(error) {
        if (axios.isAxiosError(error) && error?.request?.status === 401) {
          reactQueryClient.resetQueries(["users", "own", "useSessionQuery"])
        }
      },
    },
    mutations: {
      ...reactQueryClient.getDefaultOptions().mutations,
      onError: onErrorHandler,
    },
  })

  return (
    <ReactQueryClientProvider client={reactQueryClient}>
      {children}
    </ReactQueryClientProvider>
  )
}

export default QueryClientProvider
