import { createRequire } from 'node:module'

const requireCJS = createRequire(import.meta.url)
const { keyMirror, keyMirrorPrefix } = requireCJS('../lib/index.cjs')

describe('Integration tests - CJS', () => {

  it('keyMirror works correctly', () => {
    const result = keyMirror({ a: null, b: null })

    expect(result).toEqual({ a: 'a', b: 'b' })
  })

  it('keyMirrorPrefix works correctly', () => {
    const result = keyMirrorPrefix('test', { x: null })

    expect(result).toEqual({ x: 'test_x' })
  })

})
