import { NextResponse } from 'next/server'
import type { NextRequest, NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = (request: NextRequest) => {
  const { nextUrl } = request

  // Without this bundled js files and assets (e.g. fonts, images) will break
  if (/\.[a-z0-9]+$/i.test(nextUrl.pathname)) {
    return
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
