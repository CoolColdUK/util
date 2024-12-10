/**
 * Convert array of object to object using key field in object as key
 * @param arr array of object
 * @param key name of field in object to use as key
 * @returns
 */
export function toObject<T>(arr: T[] | undefined, key: keyof T): Record<string, T> {
  if (!arr) return {};
  return arr.reduce((acc, cur) => ({...acc, [String(cur[key])]: cur}), {});
}
