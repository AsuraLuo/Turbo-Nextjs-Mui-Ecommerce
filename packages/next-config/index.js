const fs = require('fs')
const dateformat = require('dateformat')
const withPWA = require('next-pwa')
const nextBuildId = require('next-build-id')
const withSentry = require('@sentry/nextjs')
const nextCache = require('next-pwa/cache')

const BannerPlugin = require('./banner')
const validatedRelease = require('./release')

const isProd = process.env.NODE_ENV === 'production'
const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1'
const isSentry = process.env.NEXT_PUBLIC_SENTRY_ENABLE === '1'
const CDN_URL = process.env.REACT_APP_CDN_URL || undefined
const release = process.env.NEXT_PUBLIC_SENTRY_RELEASE ?? 'v1.0.0'
const canCreateSentryRelease = validatedRelease(release)

module.exports = ({ pkg = {}, dir = __dirname, timeStamp = 0, ...rest }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    basePath: '',
    compress: false,
    distDir: '.next',
    generateEtags: false,
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
        sourceMap: !isProd,
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
    httpAgentOptions: {
      keepAlive: true
    },
    ...rest,
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '**'
        },
        {
          protocol: 'https',
          hostname: '**'
        }
      ]
    },
    generateBuildId: async () => {
      const commitId = await nextBuildId({ dir })
      const trunk = commitId.substring(0, 16)
      return `${trunk}_${timeStamp.toString()}`
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
    webpack: (config, { buildId, isServer, webpack }) => {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      })

      // Write buildId to the version controll file
      fs.writeFileSync(
        'public/version.json',
        JSON.stringify({
          version: buildId,
          timeStamp
        })
      )

      // Js trunk time hash
      if (isProd) {
        if (config.output.filename.startsWith('static')) {
          if (config.output.filename === 'static/chunks/[name]-[contenthash].js') {
            config.output.filename = `static/chunks/[name]-[contenthash]-${timeStamp}.js`
          }

          if (config.output.chunkFilename === 'static/chunks/[name].[contenthash].js') {
            config.output.chunkFilename = `static/chunks/[name]-[contenthash]-${timeStamp}.js`
          }
        }

        config.plugins.map((plugin) => {
          if (plugin.constructor.name === 'CopyFilePlugin') {
            plugin.name = `static/chunks/polyfills-[hash]-${timeStamp}.js`
          }

          return plugin
        })
      }

      // Client webpack conifg
      if (!isServer) {
        // Attention: It must be placed after terserplugin, otherwise the generated annotation description will be cleared by terserplugin or other compression plug-ins
        if (isProd && pkg) {
          config.optimization.splitChunks.cacheGroups = {
            ...(isSentry && {
              sentry: {
                chunks: 'all',
                name: 'sentry',
                test: /[\\/]node_modules[\\/](@sentry\/nextjs|@sentry\/core|@sentry\/replay|@sentry\/browser|@sentry\/utils|@sentry-internal\/tracing)[\\/]/,
                priority: 100,
                enforce: true,
                reuseExistingChunk: true
              }
            }),
            runtime: {
              chunks: 'all',
              name: 'runtime',
              test: /[\\/]node_modules[\\/](redux-logger)[\\/]/,
              priority: 90,
              enforce: true,
              reuseExistingChunk: true
            },
            ...config.optimization.splitChunks.cacheGroups
          }

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

      // Sentry webpack tree shaking
      config.plugins.push(
        new webpack.DefinePlugin({
          __SENTRY_DEBUG__: true,
          __SENTRY_TRACING__: true
        })
      )

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

  // if (isProd) {
  //   // Filter cache api resource
  //   const runtimeCaching = nextCache.filter((cache) => {
  //     return !(typeof cache.urlPattern === 'function')
  //   })
  //   plugins.push(
  //     withPWA({
  //       disable: !isProd,
  //       dest: 'public',
  //       sw: `/sw.js?v=${timeStamp}`,
  //       register: true,
  //       skipWaiting: true,
  //       reloadOnOnline: true,
  //       cacheStartUrl: false,
  //       dynamicStartUrl: true,
  //       buildExcludes: [/middleware-manifest\.json$/],
  //       publicExcludes: ['!robots.txt', '!version.json'],
  //       runtimeCaching
  //     })
  //   )
  // }

  if (isSentry && canCreateSentryRelease) {
    plugins.push((config) =>
      withSentry.withSentryConfig(
        {
          ...config,
          sentry: {
            hideSourceMaps: true,
            disableLogger: false,
            disableServerWebpackPlugin: true,
            disableClientWebpackPlugin: false,
            widenClientFileUpload: true
          }
        },
        {
          org: process.env.NEXT_PUBLIC_SENTRY_ORG_NAME,
          url: process.env.NEXT_PUBLIC_SENTRY_SERVER_URL,
          project: process.env.NEXT_PUBLIC_SENTRY_PROJECT_NAME,
          authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
          deploy: {
            env: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT
          },
          release,
          dist: release,
          urlPrefix: `~/${release}`,
          debug: true,
          silent: false,
          ignore: ['node_modules']
        }
      )
    )
  }

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
