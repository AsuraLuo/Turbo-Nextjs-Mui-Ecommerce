const createRegex = (regex) => new RegExp(regex)

const validatedRelease = (release) => {
  if (!release) {
    return false
  }

  const commitTagRegex = createRegex('^v\\d+\\.\\d+\\.\\d+$')
  const abVersionRegex = createRegex('^@[a-z0-9_]+$')

  const isValidTaggedVersion = commitTagRegex.test(release)
  const isValidABVersion = abVersionRegex.test(release)

  return isValidTaggedVersion || isValidABVersion
}

module.exports = validatedRelease
