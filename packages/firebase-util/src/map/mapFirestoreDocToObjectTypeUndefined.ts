import {May, WithId} from '@coolcolduk/typescript-util';
import {FirestoreDocSnapshotWithIdAndData} from '../types/snapshot/FirestoreDocSnapshotWithIdAndData';

/**
 * Map a Firestore document snapshot to an object with id.
 * Return undefined if the data is undefined.
 */
export function mapFirestoreDocToObjectTypeUndefined<T = Record<string, unknown>>(
  firestoreObject?: FirestoreDocSnapshotWithIdAndData<T> | undefined,
): May<WithId<T>> {
  if (!firestoreObject) return undefined;
  const {id} = firestoreObject;
  const data = firestoreObject.data();
  if (!data) return undefined;
  return {...data, id} as WithId<T>;
}
