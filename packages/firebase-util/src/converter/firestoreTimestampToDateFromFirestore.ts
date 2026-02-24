import type {FirestoreSnapshotWithData} from '../type';
import {mapFirestoreTimestampToDateForObjectValue} from './mapFirestoreTimestampToDateForObjectValue';

/**
 * Converts Firestore timestamps to Date from a snapshot's data.
 * Accepts any snapshot-like object with data() (client or admin).
 */
export function firestoreTimestampToDateFromFirestore<T extends object>(snapshot: FirestoreSnapshotWithData<T>): T {
  const data = snapshot.data() as T;
  return mapFirestoreTimestampToDateForObjectValue(data) as T;
}
