import {MaybePromise} from '@coolcolduk/typescript-util';
import {fillerArray} from '@coolcolduk/util';

/**
 * run array.some given number of times when data is provided by a fn
 * @param dataFn function to provide data
 * @param count number of times to run the data function
 * @param fn function to check if the data is true
 * @returns
 */
export async function somePromiseFnData<T>(
  dataFn: (index: number) => MaybePromise<T>,
  count: number,
  fn: (item: T, index: number) => MaybePromise<boolean>,
): Promise<boolean> {
  return fillerArray(0, count).some(async (index) => fn(await dataFn(index), index));
}
