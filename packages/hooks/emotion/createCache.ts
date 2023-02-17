import createCache from '@emotion/cache'

import { stylisPx2RemPlugin, Px2RemPluginOptions } from './px2rem'

const isBrower: boolean = typeof document !== 'undefined'

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export const createEmotionCache = (options?: Px2RemPluginOptions) => {
  let insertionPoint: any

  if (isBrower) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    )
    insertionPoint = emotionInsertionPoint ?? undefined
  }

  return createCache({
    key: 'mui-style',
    prepend: true,
    insertionPoint,
    stylisPlugins: [stylisPx2RemPlugin(options)]
  })
}
