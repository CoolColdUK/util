/**
 * Converts a SCREAMING_SNAKE_CASE string to English with the first letter capitalized.
 * @param input - The SCREAMING_SNAKE_CASE string to convert.
 * @returns The converted English string.
 */
export function mapScreamingSnakeCaseToEnglish(input: string): string {
  // Split the input by underscores, convert to lowercase, and capitalize the first letter of each word
  const words = input.split('_').map((word) => word.toLowerCase());
  // Join the words with spaces
  return words.join(' ');
}
