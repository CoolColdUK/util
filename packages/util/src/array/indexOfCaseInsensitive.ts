/**
 * array index of function but case insensitive
 * @param arr array to search for
 * @param value value to compare
 * @returns index of item, or -1 if not found
 */
export function indexOfCaseInsensitive(arr: string[], searchElement: string): number {
  const newSearchElement = searchElement.toLowerCase();
  return arr.findIndex((v) => v.toLowerCase() === newSearchElement);
}
