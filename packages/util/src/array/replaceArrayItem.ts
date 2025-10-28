/**
 * Replace an item in an array with a new item
 * @param targetArray - The array to replace the item in
 * @param replaceItem - The item to replace
 * @param matchFn - The function to match the item to replace
 * @returns The new array
 */
export function replaceArrayItem<T>(
  targetArray: T[],
  replaceItem: T,
  matchFn: (item: T, index: number, array: T[]) => boolean,
) {
  return targetArray.map((item, index, array) => (matchFn(item, index, array) ? replaceItem : item));
}
