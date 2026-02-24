import {Maybe, WithId} from '@coolcolduk/typescript-util';
import type {FirestoreDocSnapshotWithIdAndData} from '../type';

/**
 * Map a Firestore document snapshot to an object with id.
 * Compatible with both firebase (client) and firebase-admin snapshots.
 */
export function mapFirestoreDocToObjectType<T = Record<string, unknown>>(
  firestoreObject?: FirestoreDocSnapshotWithIdAndData<T> | null,
): Maybe<WithId<T>> {
  if (!firestoreObject) return null;
  const {id} = firestoreObject;
  const data = firestoreObject.data();
  if (!data) return null;
  return {...data, id} as WithId<T>;
}
