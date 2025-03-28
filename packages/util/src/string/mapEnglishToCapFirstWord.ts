/**
 * Converts a string to have its first word capitalized.
 * @param input - The input string.
 * @returns The string with the first word capitalized.
 */
export function mapEnglishToCapFirstWord(input: string): string {
  if (!input) return input;

  const words = input.split(' ');
  if (words.length === 0) return input;

  words[0] = (words[0] as string).charAt(0).toUpperCase() + (words[0] as string).slice(1);
  return words.join(' ');
}
