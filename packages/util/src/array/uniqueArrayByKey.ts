import {get} from '../object/get';

/**
 * Remove duplicate in array
 * @param arr
 * @returns
 */
export function uniqueArrayByKey<T extends object>(arr: T[], key: string): T[] {
  return arr.filter((val, i) => arr.findIndex((t) => get(t, key) === get(val, key)) === i);
}
