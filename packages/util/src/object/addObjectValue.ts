/**
 * Add the value of obj2 to obj1
 * @param obj1 - The object to add the value to
 * @param obj2 - The object to add the value from
 * @returns The new object with the added value
 */
export function addObjectValue(obj1: Record<string, number>, obj2: Record<string, number>): Record<string, number> {
  return Object.entries(obj1).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: (acc[key] ?? 0) + value,
    };
  }, obj2);
}
