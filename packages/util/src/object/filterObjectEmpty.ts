import {May, Maybe} from '@coolcolduk/typescript-util';
import {filterObject} from './filterObject';

/**
 * Filters out keys with undefined values from an object.
 * @param obj The object to filter.
 * @returns A new object without keys that have undefined values.
 */
export function filterObjectEmpty<T>(obj: Record<string, Maybe<May<T>>>): Record<string, T> {
  return filterObject(obj, (_key, value) => value !== null && value !== undefined) as Record<string, T>;
}
