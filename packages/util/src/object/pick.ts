/**
 * Creates an object composed of the picked object properties.
 * @deprecated Use `pick` from `lodash` instead. this has not been tested yet due to now decided it is not needed.
 * @param object The source object
 * @param paths The properties to pick
 * @returns Returns the new object
 */
export function pick<T extends Record<string, any>, K extends keyof T>(object: T, paths: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;

  paths.forEach((path) => {
    if (path in object) {
      result[path] = object[path];
    }
  });

  return result;
}
