module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ecommerce`
  extends: ['ecommerce'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
