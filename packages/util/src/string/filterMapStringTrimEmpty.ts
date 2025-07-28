/**
 * Filter and map string array, trim and remove empty strings
 * @param arr Array of strings
 * @returns Array of strings
 */
export function filterMapStringTrimEmpty(arr: string[]): string[] {
  return arr.map((f) => f.trim()).filter((f) => f.length);
}
