const keyMirrorPrefix = (prefix, obj) => {
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirrorPrefix(...): Second argument must be an object.')
  }

  const mirror = {}
  Object.keys(obj).forEach(key => {
    mirror[key] = prefix ? `${prefix}_${key}` : key
  })

  return mirror
}

const keyMirror = obj => keyMirrorPrefix(null, obj)

export {
  keyMirror,
  keyMirrorPrefix,
}

export default keyMirrorPrefix
