import {MaybePromise} from '@coolcolduk/typescript-util';
import {fillerArray, filterArrayUndefined, mapPromiseFnSeries} from '@coolcolduk/util';

/**
 * map promise when data is a fn
 * @param dataFn
 * @param count
 * @param fn
 * @returns
 */
export async function mapPromiseFnData<T, R>(
  dataFn: (index: number) => MaybePromise<T>,
  count: number,
  fn: (item: T, index: number) => MaybePromise<R>,
): Promise<R[]> {
  const data = filterArrayUndefined(await mapPromiseFnSeries(fillerArray(0, count), (_d, index) => dataFn(index)));
  return mapPromiseFnSeries(data, fn);
}
