/**
 * Map an object to an array of strings
 * @param obj - The object to map
 * @param spacer - The character to use between key and value (default: '=')
 * @returns An array of strings in the format "key=value"
 */
export function mapObjectToArray(obj: Record<string, string | number>, spacer: string = '='): string[] {
  return Object.entries(obj).map(([key, value]) => `${key}${spacer}${value}`);
}
