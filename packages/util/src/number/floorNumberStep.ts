/**
 * Floor number to certain steps
 * @param num
 * @param step
 * @returns
 */
export function floorNumberStep(num: number, step: number) {
  return Math.floor(num / step) * step;
}
