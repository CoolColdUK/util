import {get} from '../object/get';

/**
 * Group an array of objects by a given key
 * @param array - The array to group
 * @param key - The key to group by
 * @returns The grouped object array Record<key, T[]>
 */
export function groupArrayByKey<T extends Record<string, any>>(array: T[], key: keyof T): Record<string, T[]> {
  // Optimized: Use mutation instead of spread to avoid O(n²) complexity
  return array.reduce<Record<string, T[]>>((acc, item) => {
    const value = get(item, key as string) as any;
    if (!value) return acc;
    acc[value] = [...(acc[value] || []), item];
    return acc;
  }, {});
}
