import { Dispatch, SetStateAction, useCallback } from "react"

import { QueryClient } from "@tanstack/react-query"

import useMockServiceWorker from "@/hooks/useMockServiceWorker"
import reactQueryClientOptions from "@/reactQueryClientOptions"

export default function useToggleReactQueryClient(
  setReactQueryClient: Dispatch<SetStateAction<QueryClient>>
) {
  const toggleReactQueryClient = useCallback(
    (enabled: boolean) => {
      setReactQueryClient(
        new QueryClient({
          ...reactQueryClientOptions,
          defaultOptions: {
            ...reactQueryClientOptions.defaultOptions,
            queries: {
              ...reactQueryClientOptions.defaultOptions.queries,
              enabled,
            },
          },
        })
      )
    },
    [setReactQueryClient]
  )

  const onMSWActivated = useCallback(() => {
    toggleReactQueryClient(true)
    // eslint-disable-next-line no-console
    console.log("React Query Client queries enabled.")
  }, [toggleReactQueryClient])

  const onMSWDeactivated = useCallback(() => {
    toggleReactQueryClient(false)
    // eslint-disable-next-line no-console
    console.log("React Query Client queries disabled.")
  }, [toggleReactQueryClient])

  useMockServiceWorker(onMSWActivated, onMSWDeactivated)
}
