/**
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
 * @param obj The object to query
 * @param path The path of the property to get
 * @param defaultValue The value returned for undefined resolved values
 * @returns The resolved value
 */
export function get<T = any>(obj: Record<string, any>, path: string, defaultValue?: T): T | undefined {
  const keys = path.split('.');
  let current: any = obj;
  let shouldReturnDefault = false;

  keys.forEach((key) => {
    if (shouldReturnDefault) return;

    if (current === null || current === undefined || typeof current !== 'object') {
      shouldReturnDefault = true;
      return;
    }

    current = current[key];
  });

  return shouldReturnDefault ? defaultValue : current === undefined ? defaultValue : current;
}
