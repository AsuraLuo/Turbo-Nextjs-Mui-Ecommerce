const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const dateformat = require('dateformat')

const BannerPlugin = require('./banner')

const isProd = process.env.NODE_ENV === 'production'
const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1'

module.exports = (pkg) => {
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
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: false,
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? process.env.REACT_APP_CDN_URL : undefined,
    transpilePackages: ['@ecommerce/ui'],
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
    webpack: (config, { dev, isServer }) => {
      // Client webpack conifg
      if (!dev && !isServer) {
        // Attention: It must be placed after terserplugin, otherwise the generated annotation description will be cleared by terserplugin or other compression plug-ins
        if (isProd) {
          // Automatic injection of copyright annotation information
          config.optimization.minimizer.push(
            new BannerPlugin({
              banner: `/*!\n *  @name: ${pkg.name} \n *  @author: ${
                pkg.author
              } \n *  @date: ${dateformat(
                new Date(),
                'UTC:dddd, mmmm dS, yyyy, h:MM:ss TT'
              )} \n *  @version: ${pkg.version} \n *  @license: ${
                pkg.license
              } \n *  @copyright: ${pkg.copyright} \n */\n`
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

  if (isProd)
    plugins.push(
      withPWA({
        disable: false,
        dest: 'public',
        register: true,
        skipWaiting: true,
        reloadOnOnline: false,
        buildExcludes: [/middleware-manifest\.json$/],
        publicExcludes: ['!robots.txt'],
        runtimeCaching
      })
    )

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
