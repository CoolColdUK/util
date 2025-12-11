import {buildObjectValueAppliedFn} from '@coolcolduk/util';
import {Timestamp} from 'firebase-admin/firestore';
import {mapTimestampToDate} from './mapFirestoreTimestampToDate';

/**
 * Map a timestamp to a date for an object value
 * - this runs recursively on all values in the object
 * @param value - value to map to date
 * @returns date
 */
export const mapFirestoreTimestampToDateForObjectValue = buildObjectValueAppliedFn<any, any>(
  (d) => mapTimestampToDate(d, {skipHandleTimestampWithToDateMethod: true}),
  (value) =>
    value instanceof Timestamp ||
    (value && typeof value === 'object' && 'toDate' in value && typeof (value as any).toDate === 'function'),
);
