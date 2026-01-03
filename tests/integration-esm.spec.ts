import { keyMirror, keyMirrorPrefix } from '../lib/index.js'

describe('Integration tests - ESM', () => {

  it('keyMirror works correctly', () => {
    const result = keyMirror({ a: null, b: null })

    expect(result).toEqual({ a: 'a', b: 'b' })
  })

  it('keyMirrorPrefix works correctly', () => {
    const result = keyMirrorPrefix('test', { x: null })

    expect(result).toEqual({ x: 'test_x' })
  })

  it('keyMirror has correct type inference', () => {
    const result = keyMirror({ foo: null, bar: null })

    // Type assertions - TypeScript will error if types are incorrect
    const foo: 'foo' = result.foo
    const bar: 'bar' = result.bar

    expect(foo).toBe('foo')
    expect(bar).toBe('bar')
  })

  it('keyMirrorPrefix has correct type inference', () => {
    const result = keyMirrorPrefix('prefix', { foo: null, bar: null })

    // Type assertions - TypeScript will error if types are incorrect
    const foo: string = result.foo
    const bar: string = result.bar

    expect(foo).toBe('prefix_foo')
    expect(bar).toBe('prefix_bar')
  })

})
