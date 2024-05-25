import baseConfig from './jest.config.js'

export default {
  ...baseConfig,
  transform: {},
  testMatch: ['**/*.cjs.spec.js'],
}
