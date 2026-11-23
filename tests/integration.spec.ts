import {
  keyMirror as keyMirrorESM,
  keyMirrorPrefix as keyMirrorPrefixESM,
} from '../lib/index.js'

const {
  keyMirror: keyMirrorCJS,
  keyMirrorPrefix: keyMirrorPrefixCJS,
} = await import('../lib/index.cjs')

describe.each([
  ['ESM', keyMirrorESM, keyMirrorPrefixESM],
  ['CJS', keyMirrorCJS, keyMirrorPrefixCJS],
])('Integration tests - %s', (_format, keyMirror, keyMirrorPrefix) => {

  test('mirroring keys with keyMirror', () => {
    const result = keyMirror({ a: null, b: null })

    expect(result).toEqual({ a: 'a', b: 'b' })
  })

  test('mirroring prefixed keys with keyMirrorPrefix', () => {
    const result = keyMirrorPrefix('test', { x: null })

    expect(result).toEqual({ x: 'test_x' })
  })

})

describe('Type inference - ESM only', () => {

  test('inferring literal key types with keyMirror', () => {
    const result = keyMirrorESM({ foo: null, bar: null })

    // Type assertions - TypeScript will error if types are incorrect
    const foo: 'foo' = result.foo
    const bar: 'bar' = result.bar

    expect(foo).toBe('foo')
    expect(bar).toBe('bar')
  })

  test('inferring string value types with keyMirrorPrefix', () => {
    const result = keyMirrorPrefixESM('prefix', { foo: null, bar: null })

    // Type assertions - TypeScript will error if types are incorrect
    const foo: string = result.foo
    const bar: string = result.bar

    expect(foo).toBe('prefix_foo')
    expect(bar).toBe('prefix_bar')
  })

})
