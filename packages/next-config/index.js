const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const isProd = process.env.NODE_ENV === 'production'
const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1'
const cndURL = process.env.REACT_APP_CDN_URL

module.exports = () => {
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
    assetPrefix: isProd ? cndURL : undefined,
    transpilePackages: ['@ecloud/ui'],
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
    webpack: (config) => {
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
