/**
 * Check if this is timestamp like object for firebase-admin.
 * @param value - The value to check if it is a timestamp-like object.
 * @returns
 */
export function isTimestampLikeAdmin(value: unknown): boolean {
  if (value == null || typeof value !== 'object') return false;
  return '_seconds' in value && '_nanoseconds' in value;
}
