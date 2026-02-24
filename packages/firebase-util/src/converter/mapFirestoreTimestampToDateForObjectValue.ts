import {buildObjectValueAppliedFn} from '@coolcolduk/util';
import {mapTimestampToDate} from './mapTimestampToDate';

function isTimestampLike(value: unknown): boolean {
  if (value == null || typeof value !== 'object') return false;
  if (hasToDate(value)) return true;
  return '_seconds' in value && '_nanoseconds' in value;
}

function hasToDate(value: object): boolean {
  return 'toDate' in value && typeof (value as {toDate: unknown}).toDate === 'function';
}

/**
 * Recursively maps Firestore Timestamp-like fields to Date in an object.
 * Works with both firebase (client) and firebase-admin Timestamp shapes.
 */
export const mapFirestoreTimestampToDateForObjectValue = buildObjectValueAppliedFn<any, any>(
  (d) => mapTimestampToDate(d, {skipHandleTimestampWithToDateMethod: true}),
  isTimestampLike,
);
