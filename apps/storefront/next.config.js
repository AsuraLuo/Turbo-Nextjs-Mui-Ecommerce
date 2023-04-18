const baseConfig = require('@ecommerce/next-config')

// using data from package.json
const pkg = require('./package.json')

const nextConfig = baseConfig(pkg)

module.exports = {
  /**
   * @type {import('next').NextConfig}
   */
  ...nextConfig,
  async rewrites() {
    const baseRewrites = await nextConfig.rewrites()
    return [...baseRewrites]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}
