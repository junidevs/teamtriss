import { useMutation } from "@tanstack/react-query"
import { rest } from "msw"

import { login } from "@/services/axios/ccFoundApiClient"
import { generateErrorResponse } from "@/testUtils/generateErrorResponse"
import { render, screen, server } from "test-utils"

const mockT = jest.fn()
// eslint-disable-next-line react/display-name
jest.mock("next-translate/useTranslation", () => () => ({
  t: (key: string) => {
    mockT(key)
    return key
  },
}))

const mockEnqueueSnackbar = jest.fn()
// eslint-disable-next-line react/display-name
jest.mock("notistack", () => ({
  ...(jest.requireActual("notistack") as Record<string, unknown>),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueueSnackbar,
    }
  },
}))

function Test() {
  const { mutate } = useMutation(login)

  const handleOnClick = () => {
    mutate({ email: "", password: "" })
  }

  return <button onClick={handleOnClick}>test</button>
}

describe("QueryClientProvider provider component", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => () => ({}))
    jest.spyOn(console, "error").mockImplementation(() => () => ({}))
  })

  it("should enqueue snackbar for each object error in errors array", async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login_check`,
        (req, res, ctx) =>
          res(
            ctx.status(400, "Bad request"),
            ctx.json<ErrorResponse>(generateErrorResponse())
          )
      )
    )

    const { user } = render(<Test />)

    await user.click(screen.getByText("test"))

    expect(mockEnqueueSnackbar).toHaveBeenCalledTimes(2)
    expect(mockEnqueueSnackbar).toHaveBeenCalledWith("message one", {
      variant: "error",
    })
    expect(mockEnqueueSnackbar).toHaveBeenCalledWith("message two", {
      variant: "error",
    })
  })

  it("should enqueue snackbar once when there is no errors object but there is error field", async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login_check`,
        (req, res, ctx) =>
          res(
            ctx.status(400, "Bad request"),
            ctx.json({
              message: "message one",
            })
          )
      )
    )

    const { user } = render(<Test />)

    await user.click(screen.getByText("test"))

    expect(mockEnqueueSnackbar).toHaveBeenCalledTimes(1)
    expect(mockEnqueueSnackbar).toHaveBeenCalledWith("message one", {
      variant: "error",
    })
  })

  it("should enqueue snackbar with error message when response is empty", async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login_check`,
        (req, res, ctx) => res(ctx.status(400, "Bad request"), ctx.json({}))
      )
    )

    const { user } = render(<Test />)

    mockT.mockClear()

    await user.click(screen.getByText("test"))

    expect(mockT).toHaveBeenCalledTimes(1)
    expect(mockT).toHaveBeenCalledWith("sbm-error")
    expect(mockEnqueueSnackbar).toHaveBeenCalledTimes(1)
    expect(mockEnqueueSnackbar).toHaveBeenCalledWith("sbm-error", {
      variant: "error",
    })
  })

  it("should log some data", async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login_check`,
        (req, res, ctx) =>
          res(
            ctx.status(400, "Bad request"),
            ctx.json<ErrorResponse>(generateErrorResponse())
          )
      )
    )

    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => () => ({}))

    const { user } = render(<Test />)

    await user.click(screen.getByText("test"))

    expect(consoleLogMock).toHaveBeenCalledTimes(1)
  })
})
