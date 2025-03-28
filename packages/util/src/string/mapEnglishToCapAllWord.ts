/**
 * Converts a string to have its first word capitalized.
 * @param input - The input string.
 * @returns The string with the first word capitalized.
 */
export function mapEnglishToCapAllWord(input: string): string {
  if (!input) return input;

  const words = input.split(' ');
  if (words.length === 0) return input;
  const newWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return newWords.join(' ');
}
