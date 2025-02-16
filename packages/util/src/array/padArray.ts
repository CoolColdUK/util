import {fillerArray} from './fillerArray';

/**
 * add padding to array when required
 * @param arr original array
 * @param padValue value to use for padding
 * @param requiredSize array length required
 * @param prefix [prefix=false] padding add to front when true, to back when false
 * @returns original array when `requiredSize` smaller than array size, otherwise padded array
 */
export function padArray<T>(arr: T[], padValue: T, requiredSize: number, prefix = false): T[] {
  if (arr.length >= requiredSize) return arr;
  const requiredPad = requiredSize - arr.length;
  const padArr = fillerArray(padValue, requiredPad);
  return prefix ? [...padArr, ...arr] : [...arr, ...padArr];
}
