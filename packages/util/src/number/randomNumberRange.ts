/**
 * Generate random number between min and max
 * @param min
 * @param max
 * @returns
 */
export function randomNumberRange(number1: number, number2: number, floating = false) {
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);
  const result = Math.random() * (max - min) + min;
  return floating ? result : Math.floor(result);
}
