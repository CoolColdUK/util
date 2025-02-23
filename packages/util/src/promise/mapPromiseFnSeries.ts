import {mapPromiseSeries} from './mapPromiseSeries';

/**
 * run function provided in data array in series
 * @param arr
 * @param fn
 * @returns
 */
export function mapPromiseFnSeries<T, R>(arr: T[], fn: (data: T, index: number) => Promise<R> | R): Promise<R[]> {
  return mapPromiseSeries(arr.map((d, i) => () => fn(d, i)));
}
