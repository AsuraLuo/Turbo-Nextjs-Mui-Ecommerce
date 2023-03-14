import nookies from 'nookies'

export const getSSRCookie = (ctx: any) => {
  nookies.get(ctx)
}

export const setSSRCookie = (
  ctx: any,
  name: string,
  value: string,
  options: any
) => {
  nookies.set(ctx, name, value, options)
}

export const destroySSRCookie = (ctx: any, name: string) => {
  nookies.destroy(ctx, name)
}

export { useCookie } from './useCookie'
