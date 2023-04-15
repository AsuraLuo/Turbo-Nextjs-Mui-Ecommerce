import fs from 'fs'
import next from 'next'
import Koa from 'koa'
import Router from '@koa/router'
import { parse } from 'url'
import { createServer } from 'spdy'
import type { ParameterizedContext, Next } from 'koa'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  const options: any = {
    key: fs.readFileSync('keys/ocommerce-key.pem'),
    cert: fs.readFileSync('keys/ocommerce-cert.pem')
  }

  router.all('(.*)', async (ctx: ParameterizedContext) => {
    const { req, res } = ctx
    const parsedUrl = parse(req.url, true)
    await handle(req, res, parsedUrl)
    ctx.respond = false
  })

  server.use(router.routes())

  server.use(async (ctx: ParameterizedContext, nextFunc: Next) => {
    ctx.res.statusCode = 200
    await nextFunc()
  })

  // start the HTTP/2 server with koa
  const httpServer: any = createServer(options, server.callback())

  httpServer.listen(port, (error: any) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    }

    return console.warn(
      `> Server listening at https://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  })
})
