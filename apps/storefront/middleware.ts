import { NextResponse } from 'next/server'
import type { NextRequest, NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = (request: NextRequest) => {
  const { nextUrl, headers } = request

  // Without this bundled js files and assets (e.g. fonts, images) will break
  if (/\.[a-z0-9]+$/i.test(nextUrl.pathname)) {
    return
  }

  let ip: string = request.ip ?? headers.get('x-real-ip')
  const forwardedFor: string | null = headers.get('x-forwarded-for')

  if (!ip && forwardedFor) {
    ip = forwardedFor.split(',').at(0) ?? 'Unknown'
  }

  const response = NextResponse.next({
    request: {
      headers: request.headers
    }
  })
  if (ip) {
    const result: string[] = ip.split('.')
    const key: number = Number(result[result.length - 1])
    const version: string = key % 2 === 0 ? 'always' : 'never'
    const cacheIp: boolean = request.cookies.has('x-real-ip')

    if (!cacheIp) {
      response.cookies.set('x-real-ip', ip, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
        httpOnly: true,
        sameSite: 'lax'
      })
      response.cookies.set('x-canary-version', version, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
        httpOnly: true,
        sameSite: 'lax'
      })
    }
  }

  if (nextUrl.pathname !== nextUrl.pathname.toLowerCase()) {
    const url = nextUrl.clone()
    const { href, origin, pathname, searchParams } = url

    // Hack client router jump with pathname
    if (href.indexOf('pathname=') > -1) {
      if (searchParams.get('pathname')) searchParams.delete('pathname')
      const params = searchParams.toString() === '' ? '' : `?${searchParams.toString()}`
      url.href = `${origin}${pathname}${params}`
    }

    url.pathname = pathname.toLowerCase()

    return NextResponse.redirect(url, {
      status: 301
    })
  }

  return response
}
