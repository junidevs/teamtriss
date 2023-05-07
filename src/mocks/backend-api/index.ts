// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server")
    server.listen()
  } else {
    const { worker } = await import("./browser")
    worker.start()
  }
}
