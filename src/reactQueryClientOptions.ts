const reactQueryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
      enabled: process.env.NEXT_PUBLIC_API_MOCKING !== "enabled", // do not change
    },
  },
}

export default reactQueryClientOptions
