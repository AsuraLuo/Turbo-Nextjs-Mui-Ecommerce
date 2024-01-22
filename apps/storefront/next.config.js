const nextConfig = require('@ocommerce/next-config')

// using data from package.json
const pkg = require('./package.json')

const timeStamp = new Date().getTime()

module.exports = nextConfig({
  pkg,
  dir: process.cwd(),
  timeStamp
})
