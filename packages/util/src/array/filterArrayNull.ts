import {Maybe} from '@coolcolduk/typescript-util';

/**
 * Filter data where it is array of T and undefined to remove all undefined and fix typings
 * @param data
 * @returns
 */
export function filterArrayNull<T>(data: Maybe<T>[]): T[] {
  return data.filter((d) => d !== null) as T[];
}
