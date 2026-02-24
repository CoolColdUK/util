import {WithId} from '@coolcolduk/typescript-util';
import {filterArrayNull} from '@coolcolduk/util';
import type {FirestoreQuerySnapshotLike} from '../type';
import {mapFirestoreDocToObjectType} from './mapFirestoreDocToObjectType';

/**
 * Map a Firestore query snapshot to an array of objects with id.
 */
export function mapFirestoreDocsToObjectTypeArray<T = Record<string, unknown>>(
  firestoreObjectArray?: FirestoreQuerySnapshotLike<T> | null,
): WithId<T>[] {
  if (!firestoreObjectArray) return [];
  return filterArrayNull(firestoreObjectArray.docs.map((doc) => mapFirestoreDocToObjectType<T>(doc)));
}
