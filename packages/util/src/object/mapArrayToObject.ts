/**
 * Map an array of strings to an object
 * @param arr - The array of strings to map
 * @param spacer - The character to use between key and value (default: '=')
 * @returns An object with the keys and values from the array
 */
export function mapArrayToObject(arr: string[], spacer: string = '='): Record<string, string> {
  return Object.fromEntries(arr.map((item) => item.split(spacer)).filter(([key, value]) => key && value));
}
