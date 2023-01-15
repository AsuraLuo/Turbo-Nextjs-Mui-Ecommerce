import fs from 'fs'
import next from 'next'
import spdy from 'spdy'
import Koa from 'koa'
import Router from '@koa/router'
import { parse } from 'url'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const options: any = {
  key: fs.readFileSync('keys/nextjs-key.pem'),
  cert: fs.readFileSync('keys/nextjs-cert.pem')
}

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.all('(.*)', async (ctx: any) => {
    const { req, res } = ctx
    const parsedUrl = parse(req.url, true)
    await handle(req, res, parsedUrl)
    ctx.respond = false
  })

  server.use(router.routes())

  server.use(async (ctx: any, nextFunc: any) => {
    ctx.res.statusCode = 200
    await nextFunc()
  })

  // start the HTTP/2 server with koa
  spdy.createServer(options, server.callback()).listen(port, (error: any) => {
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
