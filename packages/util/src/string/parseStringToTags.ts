/**
 * parse string to tags
 * - split string by comma
 * - trim each tag
 * - filter empty tags
 * @param s
 * @returns
 */
export function parseStringToTags(s: string): string[] {
  return s
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}
