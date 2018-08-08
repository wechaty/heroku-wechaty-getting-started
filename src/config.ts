export {
  log,
}               from 'brolog'

/**
 * VERSION
 */
import readPkgUp from 'read-pkg-up'

const pkg = readPkgUp.sync({ cwd: __dirname }).pkg
export const VERSION = pkg.version

/**
 * Env Vars
 */
export const PORT = process.env.PORT || 8788
