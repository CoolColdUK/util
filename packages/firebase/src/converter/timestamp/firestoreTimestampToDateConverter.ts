import {FirestoreDataConverter} from 'firebase-admin/firestore';
import {firestoreTimestampToDateFromFirestore} from './firestoreTimestampToDateFromFirestore';

/**
 * run mapFirestoreTimestampToDateForObjectValue on the data
 * - use if data has timestamp and no other action required
 * @param snapshot - snapshot to convert
 * @returns converted data
 */
export const firestoreTimestampToDateConverter: FirestoreDataConverter<any> = {
  fromFirestore: firestoreTimestampToDateFromFirestore,
  toFirestore: (data: any) => data,
};
