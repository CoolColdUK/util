/**
 * Check if array has duplicates
 * @param arr source array
 * @returns
 */
export function hasArrayDuplicates<T>(arr: T[]) {
  return arr.some((val, i) => arr.includes(val, i + 1));
}
