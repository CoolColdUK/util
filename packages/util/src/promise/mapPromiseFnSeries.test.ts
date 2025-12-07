// eslint-disable-file no-promise-executor-return
import {sleepMs} from '../sleep/sleepMs';
import {mapPromiseFnSeries} from './mapPromiseFnSeries';

describe('mapPromiseFnSeries function', () => {
  it('should correctly map over the array serially and resolve promises with the transformed values', async () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (data: number) => Promise.resolve(data * 2);

    const result = await mapPromiseFnSeries(arr, fn);

    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it('should handle an empty array and return an empty array', async () => {
    const arr: number[] = [];
    const fn = (data: number) => Promise.resolve(data * 2);

    const result = await mapPromiseFnSeries(arr, fn);

    expect(result).toEqual([]);
  });

  it('should correctly handle asynchronous functions', async () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = async (data: number) => {
      await sleepMs(100);
      return data * 2;
    };

    const result = await mapPromiseFnSeries(arr, fn);

    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});
