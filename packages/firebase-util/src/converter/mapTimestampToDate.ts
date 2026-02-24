export interface MapFirestoreTimestampToDateOptions {
  /** skip handling raw Timestamp structure with _seconds and _nanoseconds */
  skipHandleRawTimestamp?: boolean;
  /** skip handling any object with toDate method */
  skipHandleTimestampWithToDateMethod?: boolean;
}

function isRawTimestamp(value: unknown): value is {_seconds: number; _nanoseconds: number} {
  return (
    typeof value === 'object' &&
    value !== null &&
    '_seconds' in value &&
    '_nanoseconds' in value &&
    typeof (value as {_seconds: unknown})._seconds === 'number' &&
    typeof (value as {_nanoseconds: unknown})._nanoseconds === 'number'
  );
}

function hasToDateMethod(value: unknown): value is {toDate: () => Date} {
  return (
    typeof value === 'object' &&
    value !== null &&
    'toDate' in value &&
    typeof (value as {toDate: unknown}).toDate === 'function'
  );
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
  if (!options.skipHandleTimestampWithToDateMethod && hasToDateMethod(timestamp)) {
    return timestamp.toDate();
  }

  if (!options.skipHandleRawTimestamp && isRawTimestamp(timestamp)) {
    return new Date(timestamp._seconds * 1000 + timestamp._nanoseconds / 1e6);
  }

  return timestamp as T | Date;
}
