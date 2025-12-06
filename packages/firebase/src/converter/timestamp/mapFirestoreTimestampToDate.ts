import {Timestamp} from 'firebase-admin/firestore';

export interface MapFirestoreTimestampToDateOptions {
  /** skip handling raw Timestamp structure with _seconds and _nanoseconds */
  skipHandleRawTimestamp?: boolean;
  /** skip handling any object with toDate method */
  skipHandleTimestampWithToDateMethod?: boolean;
}

/**
 * Map a timestamp to a date
 * - handle Firestore Timestamp object
 * - handle raw Timestamp structure with _seconds and _nanoseconds
 * - handle Timestamp with toDate method
 * - otherwise return the original value
 * @param timestamp - timestamp to map to date
 * @returns date
 */
export function mapTimestampToDate<T>(
  timestamp: T | Timestamp,
  options: MapFirestoreTimestampToDateOptions = {},
): T | Date {
  // Handle Firestore Timestamp object
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }

  if (!options.skipHandleRawTimestamp) {
    // Handle raw Timestamp structure with _seconds and _nanoseconds
    if (timestamp && typeof timestamp === 'object' && '_seconds' in timestamp && '_nanoseconds' in timestamp) {
      return new Timestamp((timestamp as any)._seconds, (timestamp as any)._nanoseconds).toDate();
    }
  }

  if (!options.skipHandleTimestampWithToDateMethod) {
    // Handle Timestamp with toDate method
    if (
      timestamp &&
      typeof timestamp === 'object' &&
      'toDate' in timestamp &&
      typeof (timestamp as any).toDate === 'function'
    ) {
      return (timestamp as any).toDate();
    }
  }

  return timestamp;
}
