/**
 * Range number between min and max
 * @param num
 * @param max
 * @param min
 * @returns
 */
export function rangeNumber(num: number, min?: number, max?: number) {
  if (max === undefined && min === undefined) {
    return num;
  }
  if (max === undefined && min !== undefined) {
    return Math.max(num, min);
  }
  if (min === undefined && max !== undefined) {
    return Math.min(num, max);
  }
  return Math.max(Math.min(num, max!), min!);
}
