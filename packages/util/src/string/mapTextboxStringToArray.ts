/**
 * convert textbox string to array
 * - break string to array via newline
 * - trim each line
 * - filter empty line
 * @param s
 * @returns
 */
export function mapTextboxStringToArray(s: string) {
  return s
    .split('\n')
    .map((p) => p.trim())
    .filter((f) => !!f);
}
