/**
 * Build object when value exists, otherwise return empty object for object building
 * @param key
 * @param value
 * @returns
 */
export function buildObjectWhenExists<T = any>(key: string, value?: T) {
  return value === undefined ? {} : {[key]: value};
}
