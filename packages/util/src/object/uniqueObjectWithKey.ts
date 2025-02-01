/**
 * remote item in array that has duplicated value within given key of object
 * @param arr
 * @param key
 * @returns
 */
export function uniqueObjectWithKey<T, K extends keyof T>(arr: T[], key: K): T[] {
  const seenValues = new Set<T[K]>();
  return arr.filter((obj) => {
    if (seenValues.has(obj[key])) {
      return false; // Skip duplicate
    }
    seenValues.add(obj[key]);
    return true; // Keep unique object
  });
}
