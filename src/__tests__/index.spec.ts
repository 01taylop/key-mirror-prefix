import { keyMirror, keyMirrorPrefix } from '..'

describe('error handling', () => {

  describe.each([
    ['keyMirror', (obj: unknown) => keyMirror(obj as any)],
    ['keyMirrorPrefix', (obj: unknown) => keyMirrorPrefix(null, obj as any)],
  ])('%s', (_fnName, fn) => {

    test.each([
      ['null', null],
      ['undefined', undefined],
    ])('throws an error when the object argument is %s', (objType, obj) => {
      expect(() => fn(obj)).toThrow(`keyMirrorPrefix: Expected an object, but received ${objType}`)
    })

    test.each([
      ['boolean', true],
      ['number', 12],
      ['string', 'string'],
    ])('throws an error when the object argument is of type %s', (objType, obj) => {
      expect(() => fn(obj)).toThrow(`keyMirrorPrefix: Expected an object, but received ${objType}`)
    })

    it('throws an error when the object argument is an array', () => {
      expect(() => fn([])).toThrow('keyMirrorPrefix: Expected an object, but received an array')
    })

  })

})

describe('keyMirrorPrefix', () => {

  it('returns an empty object when the object argument is empty', () => {
    const result = keyMirrorPrefix(null, {})

    expect(result).toStrictEqual({})
  })

  it('returns a key mirror object with no prefix when the prefix is null', () => {
    const result = keyMirrorPrefix(null, {
      hello: null,
      world: null,
    })

    expect(result).toStrictEqual({
      hello: 'hello',
      world: 'world',
    })
  })

  it('returns a key mirror object with no prefix when the prefix is an empty string', () => {
    const result = keyMirrorPrefix('', {
      hello: null,
      world: null,
    })

    expect(result).toStrictEqual({
      hello: 'hello',
      world: 'world',
    })
  })

  it('returns a key mirror object with a prefix', () => {
    const result = keyMirrorPrefix('test', {
      hello: null,
      world: null,
    })

    expect(result).toStrictEqual({
      hello: 'test_hello',
      world: 'test_world',
    })
  })

  it('ignores object property values and only uses keys', () => {
    const result = keyMirrorPrefix('test', {
      a: 'ignored',
      b: 123,
      c: { nested: 'object' },
      d: null,
    })

    expect(result).toStrictEqual({
      a: 'test_a',
      b: 'test_b',
      c: 'test_c',
      d: 'test_d',
    })
  })

  it('handles prefixes with special characters', () => {
    const result = keyMirrorPrefix('test-prefix.v2', {
      key: null,
    })

    expect(result).toStrictEqual({
      key: 'test-prefix.v2_key',
    })
  })

})

describe('keyMirror', () => {

  it('returns a key mirror object', () => {
    const result = keyMirror({
      hello: null,
      world: null,
    })

    expect(result).toStrictEqual({
      hello: 'hello',
      world: 'world',
    })
  })

  it('ignores object property values and only uses keys', () => {
    const result = keyMirror({
      a: 'ignored',
      b: 123,
      c: { nested: 'object' },
    })

    expect(result).toStrictEqual({
      a: 'a',
      b: 'b',
      c: 'c',
    })
  })

})
