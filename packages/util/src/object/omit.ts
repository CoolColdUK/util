import {castArray} from '../array/castArray';

/**
 * Creates an object composed of the object properties that are not omitted.
 * @param object The source object
 * @param paths The properties to omit
 * @returns Returns the new object
 */
export function omit<T extends Record<string, any>, K extends keyof T>(object: T, paths: K | K[]): Omit<T, K> {
  const result = {} as any;
  const omitSet = new Set(castArray(paths));

  (Object.keys(object) as Array<keyof T>).forEach((key) => {
    if (!omitSet.has(key as K)) {
      result[key] = object[key];
    }
  });

  return result as Omit<T, K>;
}
