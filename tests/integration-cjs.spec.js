import { createRequire } from 'node:module'

const esmRequire = createRequire(import.meta.url)
const { keyMirror, keyMirrorPrefix } = esmRequire('../lib/index.cjs')

describe('Integration tests - CJS', () => {

  test('keyMirror works correctly', () => {
    const result = keyMirror({ a: null, b: null })

    expect(result).toEqual({ a: 'a', b: 'b' })
  })

  test('keyMirrorPrefix works correctly', () => {
    const result = keyMirrorPrefix('test', { x: null })

    expect(result).toEqual({ x: 'test_x' })
  })

})
