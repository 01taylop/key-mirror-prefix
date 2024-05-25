import { keyMirrorPrefix } from '../lib/index'

describe('keyMirrorPrefix', () => {

  it('throws an error if the second argument is not an object', () => {
    expect(() => {
      keyMirrorPrefix(null, null)
    }).toThrow('keyMirrorPrefix(...): Second argument must be an object.')
  })

  it('throws an error if the second argument is an array', () => {
    expect(() => {
      keyMirrorPrefix(null, [])
    }).toThrow('keyMirrorPrefix(...): Second argument must be an object.')
  })

  it('returns an empty object if the second argument is an empty object', () => {
    const testObject = keyMirrorPrefix(null, {})

    expect(testObject).toEqual({})
  })

  it('returns a key mirror object with no prefix', () => {
    const testObject = keyMirrorPrefix(null, {
      hello: null,
      world: null,
    })

    expect(testObject).toEqual({
      hello: 'hello',
      world: 'world',
    })
  })

  it('returns a key mirror object with a prefix', () => {
    const testObject = keyMirrorPrefix('prefix', {
      hello: null,
      world: null,
    })

    expect(testObject).toEqual({
      hello: 'prefix_hello',
      world: 'prefix_world',
    })
  })

})
