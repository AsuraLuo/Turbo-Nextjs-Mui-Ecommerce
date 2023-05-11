import { DECLARATION, Element, Middleware } from 'stylis'

export type Px2RemPluginOptions = {
  remSize?: number
  allowList?: string[]
  blockList?: string[]
}

const pxRegexp: RegExp = /"[^"]+"|'[^']+'|url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g

export const stylisPx2RemPlugin = (options: Px2RemPluginOptions = {}): Middleware => {
  const { remSize = 16, allowList, blockList } = options

  return (element: Element) => {
    if (element.type === DECLARATION) {
      const declarationHasPx = element.value.match(pxRegexp)

      if (declarationHasPx) {
        if (allowList && !allowList.includes(element.props as string)) return
        if (blockList && blockList.includes(element.props as string)) return
        const expression: string = (element.children as string).replace(
          pxRegexp,
          (match, group) => {
            return group ? `${Number(group) / remSize}rem` : match
          }
        )
        const reconstructedDeclaration: string = `${element.props}:${expression};`

        element.return = reconstructedDeclaration
      }
    }
  }
}
