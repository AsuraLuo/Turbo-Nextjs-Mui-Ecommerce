const baseConfig = require('@ecommerce/next-config')

const nextConfig = baseConfig()

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
