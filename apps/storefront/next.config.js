const withBundleAnalyzer = require('@next/bundle-analyzer')

const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1'

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: false,
    distDir: '.next',
    generateEtags: false,
    pageExtensions: ['tsx', 'ts'],
    transpilePackages: ['@ecommerce/ui'],
    webpack: (config) => {
      // Important: return the modified config
      return config
    }
  }

  const plugins = []

  if (isAnalyzer)
    plugins.push(
      withBundleAnalyzer({
        enabled: true
      })
    )

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
