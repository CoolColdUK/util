/**
 * build up object with different variation of smaller part of that object
 * good for building combination of data for testing
 * @param firstArray
 * @param arr
 * @returns
 */
export function combineArraysObject<T>(firstArray: Partial<T>[], ...arr: Partial<T>[][]): Partial<T>[] {
  const nextItem = arr ? arr[0] : undefined;
  if (!nextItem) return firstArray;
  if (!nextItem.length) return firstArray;

  const rtn: Partial<T>[] = [];

  const otherArr = combineArraysObject(nextItem, ...arr.slice(1));
  firstArray.forEach((a1) => otherArr.forEach((ao) => rtn.push({...a1, ...ao})));
  return rtn;
}
