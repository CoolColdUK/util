/**
 * Resolves a list of conditions and returns the corresponding output for the first true condition.
 * Useful for replacing nested ternary expressions.
 *
 * @param conditions - An array of boolean conditions.
 * @param outputs - An array of outputs corresponding to each condition.
 * @param defaultValue - The value to return if no conditions are true.
 * @returns The output corresponding to the first true condition, or undefined if none are true.
 */
export function selectArrayTernary<T>(conditions: boolean[], outputs: T[], defaultValue: T): T {
  if (outputs.length === 0) {
    throw new Error('selectArrayTernary: outputs array must not be empty');
  }
  const idx = conditions.indexOf(true);
  if (idx !== -1 && idx < outputs.length) {
    return outputs[idx] || defaultValue;
  }
  return defaultValue;
}
