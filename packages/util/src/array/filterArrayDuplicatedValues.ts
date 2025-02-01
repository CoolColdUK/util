import {uniqueArray} from './uniqueArray';

/**
 * Return a unique array of duplicates in the source array
 * @param arr source array
 * @returns
 */
export function filterArrayDuplicatedValues<T>(arr: T[]) {
  return uniqueArray(arr.filter((val, i) => arr.includes(val, i + 1)));
}
