module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ocommerce`
  extends: ['ocommerce'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
