import { NextResponse } from 'next/server'
import type { NextRequest, NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = (request: NextRequest) => {
  const { nextUrl } = request

  // Without this bundled js files and assets (e.g. fonts, images) will break
  if (/\.[a-z0-9]+$/i.test(nextUrl.pathname)) {
    return
  }

  let ip = request.ip ?? request.headers.get('x-real-ip')
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(',').at(0) ?? 'Unknown'
  }
  console.info(ip)

  if (ip) {
    NextResponse.next().cookies.set('user-ip', ip, {
      httpOnly: false
    })
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

  return NextResponse.next()
}
