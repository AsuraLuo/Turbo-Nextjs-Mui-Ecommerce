const withPWA = require('next-pwa')
const nextCache = require('next-pwa/cache')
const withSentry = require('@sentry/nextjs')
const dateformat = require('dateformat')

const BannerPlugin = require('./banner')

const isProd = process.env.NODE_ENV === 'production'
const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1'
const isSentry = process.env.REACT_SENTRY_ENABLE === '1'
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
      reactRemoveProperties: isProd,
      removeConsole: isProd,
      emotion: {
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        importMap: {
          '@mui/system': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/system', 'styled']
            }
          },
          '@mui/material/styles': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/material/styles', 'styled']
            }
          }
        }
      }
    },
    eslint: {
      ignoreDuringBuilds: isProd
    },
    typescript: {
      ignoreBuildErrors: isProd
    },
    sentry: {
      // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
      // for client-side builds. (This will be the default starting in
      // `@sentry/nextjs` version 8.0.0.) See
      // https://webpack.js.org/configuration/devtool/ and
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
      // for more information.
      hideSourceMaps: true,
      disableLogger: false,
      automaticVercelMonitors: false
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

  if (isSentry) plugins.push(withSentry.withSentryConfig)

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
