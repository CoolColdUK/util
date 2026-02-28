import {buildObjectValueAppliedFn} from '@coolcolduk/util';
import {isTimestampLike} from './isTimestampLike';
import {mapTimestampToDate} from './mapTimestampToDate';

/**
 * Recursively maps Firestore Timestamp-like fields to Date in an object.
 * Works with both firebase (client) and firebase-admin Timestamp shapes.
 */
export const mapFirestoreTimestampToDateForObjectValue = buildObjectValueAppliedFn<any, any>(
  (d) => mapTimestampToDate(d),
  isTimestampLike,
);
