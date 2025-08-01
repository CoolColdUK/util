/**
 * Sets the value at path of object. If a portion of path doesn't exist, it's created.
 * @param obj The object to modify
 * @param path The path of the property to set
 * @param value The value to set
 * @returns The modified object
 */
export function set<T extends Record<string, any>>(obj: T, path: string, value: any): T {
  const keys = path.split('.');
  let current: any = obj;

  keys.forEach((key, index) => {
    if (key === undefined) return;

    if (index < keys.length - 1) {
      const nextKey = keys[index + 1];
      const isNextKeyArray = nextKey !== undefined && /^\d+$/.test(nextKey);

      if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
        current[key] = isNextKeyArray ? [] : {};
      }
      current = current[key];
    } else {
      current[key] = value;
    }
  });

  return obj;
}
