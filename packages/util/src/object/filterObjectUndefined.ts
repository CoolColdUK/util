import {May} from '@coolcolduk/typescript-util';
import {filterObject} from './filterObject';

/**
 * Filters out keys with undefined values from an object.
 * @param obj The object to filter.
 * @returns A new object without keys that have undefined values.
 */
export function filterObjectUndefined<T>(obj: Record<string, May<T>>): {[K in keyof T]: T[K]} {
  return filterObject(obj, (_key, value) => value !== undefined) as {[K in keyof T]: T[K]};
}
