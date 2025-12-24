type KeyMirrorInput = Record<string, unknown>

const keyMirrorPrefix = <T extends KeyMirrorInput>(
  prefix: string | null,
  obj: T,
): { [K in keyof T]: string } => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error(`keyMirrorPrefix: Expected an object, but received ${typeof obj}`)
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key]) => [
      key,
      prefix ? `${prefix}_${key}` : key
    ])
  ) as { [K in keyof T]: string }
}

const keyMirror = <T extends KeyMirrorInput>(
  obj: T,
): { [K in keyof T]: K } => keyMirrorPrefix(null, obj) as { [K in keyof T]: K }

export {
  keyMirror,
  keyMirrorPrefix,
}

export default keyMirrorPrefix
