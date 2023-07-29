import { NextResponse } from 'next/server'
import type { NextRequest, NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = (request: NextRequest) => {
  // Without this bundled js files and assets (e.g. fonts, images) will break
  if (/\.[a-z0-9]+$/i.test(request.nextUrl.pathname)) {
    return
  }

  if (request.nextUrl.pathname !== request.nextUrl.pathname.toLowerCase()) {
    const url = request.nextUrl.clone()
    url.pathname = url.pathname.toLowerCase()
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
