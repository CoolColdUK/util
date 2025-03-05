export type ValidatorFn = (prefix: string, key: string, value: any) => boolean;

/**
 * convert an single layer with keys in dot notation to multi layer
 * @param obj
 * @param prefix prefix of key to be used for recursion
 * @param skipValidator array of function to skip certain key/value
 * @returns
 */
export function setBulkReverse<T extends Record<string, any>>(
  obj: T,
  prefix: string = '',
  skipValidator: ValidatorFn[] = [],
): Record<string, any> {
  let result: Record<string, any> = {};

  if (skipValidator.some((validator) => validator(prefix, '', obj))) {
    return {[prefix]: obj};
  }

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (skipValidator.some((validator) => validator(prefix, key, value))) {
      result[newKey] = value;
      continue;
    }

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (item !== null && typeof item === 'object') {
          Object.assign(result, setBulkReverse(item, `${newKey}.${index}`, skipValidator));
        } else {
          result[`${newKey}.${index}`] = item;
        }
      });
      continue;
    }

    if (value !== null && typeof value === 'object') {
      Object.assign(result, setBulkReverse(value, newKey, skipValidator));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
