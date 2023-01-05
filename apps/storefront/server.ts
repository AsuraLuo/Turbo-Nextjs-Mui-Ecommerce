import { parse } from 'url'
import next from 'next'
import Koa from 'koa'
import Router from '@koa/router'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.all('(.*)', async (ctx: any) => {
    const { req, res } = ctx
    const parsedUrl = parse(req.url, true)
    await handle(req, res, parsedUrl)
    ctx.respond = false
  })

  server.use(async (ctx: any, nextFunc: any) => {
    ctx.res.statusCode = 200
    await nextFunc()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.warn(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  })
})
