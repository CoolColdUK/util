/**
 * execute function in all values in record
 * @param rec - record to transform
 * @param fn - function to apply to each value
 * @param keyFilter - if provided, only apply function to keys in this array
 * @returns
 */
export function transformObjectValue<T, U>(
  rec: Record<string, T>,
  fn: (d: T) => U,
  keyFilter?: string[],
): Record<string, U> {
  const data = Object.entries(rec);
  const result: [string, U][] = data.map(([key, val]) => [
    key,
    (!keyFilter || keyFilter.includes(key) ? fn(val) : val) as U,
  ]);
  return Object.fromEntries(result);
}
