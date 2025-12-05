import {get} from '../object/get';

/**
 * Reduce an array to a group array by a  given key
 * @param array - The array to reduce
 * @param key - The key to reduce by
 * @returns The reduced object array Record<key, T[]>
 */
export default function reduceArrayToGroupArrayByKey<T extends Record<string, any>>(
  array: T[],
  key: keyof T,
): Record<string, T[]> {
  // Optimized: Use mutation instead of spread to avoid O(n²) complexity
  return array.reduce<Record<string, T[]>>((acc, item) => {
    const value = get(item, key as string) as any;
    if (!value) return acc;
    if (!acc[value]) {
      acc[value] = [];
    }
    acc[value].push(item);
    return acc;
  }, {});
}
