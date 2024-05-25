import keyMirrorPrefix from '../'

describe('keyMirrorPrefix', () => {

  it('throws an error if the second argument is not an object', () => {
    expect(() => {
      keyMirrorPrefix(null, null)
    }).toThrow('keyMirrorPrefix(...): Argument must be an object.')
  })

  it('throws an error if the second argument is an array', () => {
    expect(() => {
      keyMirrorPrefix(null, [])
    }).toThrow('keyMirrorPrefix(...): Argument must be an object.')
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
