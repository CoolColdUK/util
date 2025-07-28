import {get} from './get';
import {setPure} from './setPure';

/**
 * Map input object to output object renaming keys
 * @param obj Object to map
 * @param mapper Object where key is the new key in object, value is the old key in object
 * @returns Mapped object
 */
export function mapObjectKeys<T extends Record<string, any>>(
  obj: Record<string, any>,
  mapper: Record<keyof T, string>,
): T {
  return Object.entries(mapper).reduce((acc, [newKey, oldKey]) => {
    const mappedValue = get(obj, oldKey);
    if (mappedValue !== undefined) {
      return setPure(acc, newKey, mappedValue);
    }
    return acc;
  }, {} as T);
}
