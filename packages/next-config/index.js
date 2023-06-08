const withPWA = require('next-pwa')
const nextCache = require('next-pwa/cache')
const dateformat = require('dateformat')

const BannerPlugin = require('./banner')

const isProd = process.env.NODE_ENV === 'production'
const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1'
const CDN_URL = process.env.REACT_APP_CDN_URL || undefined

module.exports = (pkg = {}) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    basePath: '',
    compress: false,
    distDir: '.next',
    generateEtags: false,
    staticPageGenerationTimeout: 1000,
    pageExtensions: ['tsx', 'ts'],
    poweredByHeader: false,
    reactStrictMode: false,
    swcMinify: true,
    trailingSlash: false,
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? CDN_URL : undefined,
    transpilePackages: ['lodash-es', '@ocommerce/ui'],
    compiler: {
      emotion: true,
      reactRemoveProperties: isProd,
      removeConsole: isProd
    },
    eslint: {
      ignoreDuringBuilds: isProd
    },
    typescript: {
      ignoreBuildErrors: isProd
    },
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}'
      }
    },
    async rewrites() {
      return [
        {
          source: '/blog/:pathname*',
          destination: '/blog/_blog-resolver'
        },
        {
          source: '/:pathname*',
          destination: '/_url-resolver'
        }
      ]
    },
    webpack: (config, { isServer }) => {
      // Client webpack conifg
      if (!isServer) {
        // Attention: It must be placed after terserplugin, otherwise the generated annotation description will be cleared by terserplugin or other compression plug-ins
        if (isProd && pkg) {
          // Automatic injection of copyright annotation information
          config.optimization.minimizer.push(
            new BannerPlugin({
              banner: `/*!\n *  @name: ${pkg.name} \n *  @author: ${
                pkg.author
              } \n *  @date: ${dateformat(
                new Date(),
                'UTC:dddd, mmmm dS, yyyy, h:MM:ss TT'
              )} \n *  @version: ${pkg.version} \n *  @license: ${pkg.license} \n *  @copyright: ${
                pkg.copyright
              } \n */\n`
            })
          )
        }
      }

      // Important: return the modified config
      return config
    }
  }

  const plugins = []

  if (isAnalyzer)
    plugins.push(
      require('@next/bundle-analyzer')({
        enabled: true
      })
    )

  if (isProd) {
    // Filter cache api resource
    const runtimeCaching = nextCache.filter((cache) => {
      return !(typeof cache.urlPattern === 'function')
    })
    plugins.push(
      withPWA({
        disable: false,
        dest: 'public',
        register: true,
        skipWaiting: true,
        reloadOnOnline: true,
        cacheStartUrl: false,
        dynamicStartUrl: true,
        buildExcludes: [/middleware-manifest\.json$/],
        publicExcludes: ['!robots.txt'],
        runtimeCaching
      })
    )
  }

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
