/**
 * Ceil number to certain steps
 * @param num
 * @param step
 * @returns
 */
export function ceilNumberStep(num: number, step: number) {
  return Math.ceil(num / step) * step;
}
