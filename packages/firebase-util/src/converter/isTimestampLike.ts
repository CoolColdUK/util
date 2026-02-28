import {isTimestampLikeAdmin} from './isTimestampLikeAdmin';
import {isTimestampLikeClient} from './isTimestampLikeClient';

/**
 * Checks if a value is a timestamp-like object for firebase (client).
 * @param value - The value to check if it is a timestamp-like object.
 * @returns True if the value is a timestamp-like object, false otherwise.
 */
export function isTimestampLike(value: unknown): boolean {
  return isTimestampLikeAdmin(value) || isTimestampLikeClient(value);
}
