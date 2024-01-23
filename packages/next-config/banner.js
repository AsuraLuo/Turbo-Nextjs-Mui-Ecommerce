const { Compilation, sources } = require('webpack')

class BannerPlugin {
  constructor(options) {
    this.banner = options.banner
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('BannerPlugin', (compilation) => {
      compilation.hooks.afterProcessAssets.tap(
        {
          name: 'BannerPlugin',
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER
        },
        (assets) => {
          Object.entries(assets).forEach(([pathname, source]) => {
            if (pathname.endsWith('.json') || pathname.endsWith('.map')) {
              return
            }

            compilation.updateAsset(pathname, new sources.RawSource(this.banner + source.source()))
          })
        }
      )
    })
  }
}

module.exports = BannerPlugin
