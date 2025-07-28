/**
 * Sets the value at path of object. If a portion of path doesn't exist, it's created.
 * @param obj The object to modify
 * @param path The path of the property to set
 * @param value The value to set
 * @returns The modified object
 */
export function set<T extends Record<string, any>>(obj: T, path: string, value: any): T {
  const keys = path.split('.');
  let current = JSON.parse(JSON.stringify(obj));

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (key === undefined) continue;

    const nextKey = keys[i + 1];
    const isNextKeyArray = nextKey !== undefined && /^\d+$/.test(nextKey);

    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = isNextKeyArray ? [] : {};
    }
    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  if (lastKey !== undefined) {
    current[lastKey] = value;
  }

  return current;
}
