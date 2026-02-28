/**
 * Check if this is timestamp like object for firebase (client).
 * @param value - The value to check if it is a timestamp-like object.
 * @returns
 */
export function isTimestampLikeClient(value: unknown): boolean {
  if (value == null || typeof value !== 'object') return false;
  return 'seconds' in value && 'nanoseconds' in value;
}
