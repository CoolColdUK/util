/**
 * Merge the original object with the updated field
 * the array will be replaced by the updated field
 * @param obj1 - The original object
 * @param obj2 - The updated field
 * @returns The merged object
 */
export function mergeReplaceArray<T extends Record<string, unknown>>(obj1: T, obj2: Partial<T>): T {
  return Object.entries(obj2).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      return {...acc, [key]: value};
    }
    if (typeof value === 'object' && value !== null && typeof obj1[key] === 'object' && obj1[key] !== null) {
      return {...acc, [key]: mergeReplaceArray(obj1[key] as Record<string, unknown>, value as Record<string, unknown>)};
    }
    return {...acc, [key]: value};
  }, obj1) as T;
}
