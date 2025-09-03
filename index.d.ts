declare function keyMirrorPrefix<T extends Record<string, any>>(
  prefix: string | null,
  obj: T
): { [K in keyof T]: string }

declare function keyMirror<T extends Record<string, any>>(
  obj: T
): { [K in keyof T]: K }

export {
  keyMirror,
  keyMirrorPrefix,
}

export default keyMirrorPrefix
