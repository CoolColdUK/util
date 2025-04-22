import {Maybe} from '@coolcolduk/typescript-util';
import {filterObject} from './filterObject';

/**
 * Filters out keys with undefined values from an object.
 * @param obj The object to filter.
 * @returns A new object without keys that have undefined values.
 */
export function filterObjectNull<T>(obj: Record<string, Maybe<T>>): Record<string, T> {
  return filterObject(obj, (_key, value) => value !== null) as Record<string, T>;
}
