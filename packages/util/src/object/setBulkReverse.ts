/**
 * convert an single layer with keys in dot notation to multi layer
 * @param obj
 * @returns
 */
export function setBulkReverse<T extends Record<string, any>>(obj: T, prefix: string = ''): Record<string, any> {
  let result: Record<string, any> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (item !== null && typeof item === 'object') {
          Object.assign(result, setBulkReverse(item, `${newKey}.${index}`));
        } else {
          result[`${newKey}.${index}`] = item;
        }
      });
    } else if (value !== null && typeof value === 'object') {
      Object.assign(result, setBulkReverse(value, newKey));
    } else {
      result[newKey] = value;
    }
  }

  return result;
}
