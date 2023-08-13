import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware'
import type { NextApiRequest, NextApiResponse } from 'next/types'

const apiProxy: any = createProxyMiddleware({
  target: process.env.REACT_APP_API_URL,
  changeOrigin: true,
  secure: true,
  pathRewrite: {
    '^/api/rest': '/'
  },
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
    // set headers manually
    res.setHeader(
      'cache-control',
      'public, max-age=3600, s-maxage=60, stale-while-revalidate=86400'
    )

    return responseBuffer
  })
})

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  apiProxy(req, res, (result: any) => {
    if (result instanceof Error) {
      throw result
    }

    throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`)
  })
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false
  }
}

export default handler
