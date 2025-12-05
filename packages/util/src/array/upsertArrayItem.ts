/**
 * Replace an item in an array with a new item or append the item if it doesn't exist
 * @param targetArray - The array to replace the item in
 * @param replaceItem - The item to replace
 * @param matchFn - The function to match the item to replace
 * @returns The new array
 */
export function upsertArrayItem<T>(
  targetArray: T[],
  replaceItem: T,
  matchFn: (item: T, index: number, array: T[]) => boolean,
) {
  let count = 0;
  const wrapMatchFn = (item: T, index: number, array: T[]) => {
    if (matchFn(item, index, array)) {
      count += 1;
      return replaceItem;
    }
    return item;
  };
  const rtn = targetArray.map(wrapMatchFn);
  return count === 0 ? [...targetArray, replaceItem] : rtn;
}
