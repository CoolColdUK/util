import {MaybePromise} from '@coolcolduk/typescript-util';
import {fillerArray} from '../array/fillerArray';
import {filterArrayUndefined} from '../array/filterArrayUndefined';
import {mapPromiseFnSeries} from './mapPromiseFnSeries';

/**
 * map promise when data is a fn
 * @param dataFn function to provide data
 * @param count number of times to run the data function
 * @param fn function to map over the data
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
