/* eslint-disable jest/require-top-level-describe */
import "@testing-library/jest-dom"
import "isomorphic-fetch"

import { server } from "@/mocks/backend-api/server"

import deleteAllCookies from "./src/testUtils/deleteAllCookie"
import { reactQueryClient } from "./src/testUtils/reactQueryClient"

beforeAll(async () => {
  server.listen()
})

beforeEach(() => {
  jest.mock("next-translate/useTranslation")

  const mockIntersectionObserver = jest.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })
  window.IntersectionObserver = mockIntersectionObserver
})

afterEach(() => {
  server.resetHandlers()
  reactQueryClient.clear()
  deleteAllCookies()
  localStorage.clear()
  sessionStorage.clear()
  jest.useRealTimers()
})

afterAll(() => {
  server.close()
})
