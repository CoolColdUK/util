import {MaybePromise} from '@coolcolduk/typescript-util';
import {fillerArray} from '../array/fillerArray';

/**
 * Run a predicate over items produced by dataFn, one at a time, until one returns true (short-circuits).
 * @param dataFn function to provide data for each index
 * @param count number of times to run the data function
 * @param fn predicate to check each item; first true stops iteration
 * @returns true if any fn(item, index) is true, false otherwise
 */
export async function somePromiseFnData<T>(
  dataFn: (index: number) => MaybePromise<T>,
  count: number,
  fn: (item: T, index: number) => MaybePromise<boolean>,
): Promise<boolean> {
  const indices = fillerArray(0, count);
  for (let i = 0; i < indices.length; i += 1) {
    const item = await dataFn(i);
    if (await fn(item, i)) return true;
  }
  return false;
}
