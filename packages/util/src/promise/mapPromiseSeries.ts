/**
 * Run an array of async function in series
 * @param arr array of function to run
 * @returns
 */
export async function mapPromiseSeries<T>(arr: ((index: number) => T | Promise<T>)[]): Promise<T[]> {
  const result: T[] = [];
  let i = 0;
  for (const fn of arr) {
    result.push(await fn(i));
    i += 1;
  }
  return result;
}
