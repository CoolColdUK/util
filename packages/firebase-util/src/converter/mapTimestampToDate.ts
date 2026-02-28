import {hasTimestampToDateMethod} from './hasTimestampToDateMethod';
import {isTimestampLikeAdmin} from './isTimestampLikeAdmin';
import {isTimestampLikeClient} from './isTimestampLikeClient';
import {TimestampAdmin} from './TimestampAdmin';
import {TimestampClient} from './TimestampClient';

export interface MapFirestoreTimestampToDateOptions {
  /** skip handling Timestamp like object for firebase-admin */
  skipHandleTimestampLikeAdmin?: boolean;
  /** skip handling Timestamp like object for firebase (client) */
  skipHandleTimestampLikeClient?: boolean;
  /** skip handling any object with toDate method */
  skipHandleTimestampWithToDateMethod?: boolean;
}

/**
 * Map a timestamp to a date.
 * Uses duck typing only (no firebase/firebase-admin import).
 * - Handles Firestore Timestamp-like objects (with toDate method)
 * - Handles raw Timestamp structure with _seconds and _nanoseconds
 * - Otherwise returns the original value
 * @param timestamp - value that may be a Timestamp or raw shape
 * @returns Date or the original value
 */
export function mapTimestampToDate<T>(
  timestamp: T | {toDate(): Date} | {_seconds: number; _nanoseconds: number},
  options: MapFirestoreTimestampToDateOptions = {},
): T | Date {
  if (!options.skipHandleTimestampWithToDateMethod && hasTimestampToDateMethod(timestamp)) {
    return timestamp.toDate();
  }

  if (!options.skipHandleTimestampLikeAdmin && isTimestampLikeAdmin(timestamp)) {
    const ts = timestamp as TimestampAdmin;
    return new Date(ts._seconds * 1000 + ts._nanoseconds / 1e6);
  }

  if (!options.skipHandleTimestampLikeClient && isTimestampLikeClient(timestamp)) {
    const ts = timestamp as TimestampClient;
    return new Date(ts.seconds * 1000 + ts.nanoseconds / 1e6);
  }

  return timestamp as T;
}
