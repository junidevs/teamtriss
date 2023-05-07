import {
  PathParams,
  ResponseResolver,
  rest,
  RestContext,
  RestRequest,
} from "msw"
import * as process from "process"

export type RestResponseResolver = ResponseResolver<
  RestRequest<never, PathParams<string>>,
  RestContext,
  any // eslint-disable-line @typescript-eslint/no-explicit-any
>

const createEndpoint = (pathname: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/api/${pathname}`

const get = rest.get
// const post = rest.post
// const patch = rest.patch
// const remove = rest.delete

export const handlers = [
  get(createEndpoint("status"), (req, res, ctx) => {
    return res(ctx.status(200))
  }),
]
