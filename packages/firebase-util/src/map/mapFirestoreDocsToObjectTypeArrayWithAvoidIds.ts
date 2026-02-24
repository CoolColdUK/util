import {MaybeArray, WithId} from '@coolcolduk/typescript-util';
import {filterArrayNull, loopTill} from '@coolcolduk/util';
import type {FirestoreQuerySnapshotLike} from '../type';
import {mapFirestoreDocToObjectType} from './mapFirestoreDocToObjectType';
import {mapFirestoreDocsToObjectTypeArray} from './mapFirestoreDocsToObjectTypeArray';

/**
 * Map a Firestore query snapshot to an array of objects with id, excluding given document ids, optionally limited.
 */
export async function mapFirestoreDocsToObjectTypeArrayWithAvoidIds<T = Record<string, unknown>>(
  firestoreObjectArray: FirestoreQuerySnapshotLike<T> | null | undefined,
  avoidDocumentIds?: MaybeArray<string>,
  limit?: number,
): Promise<WithId<T>[]> {
  if (!firestoreObjectArray) return [];
  const isEmptyAvoid =
    !avoidDocumentIds ||
    (typeof avoidDocumentIds === 'string' ? avoidDocumentIds === '' : avoidDocumentIds.length === 0);
  if (isEmptyAvoid) return mapFirestoreDocsToObjectTypeArray(firestoreObjectArray);
  const avoidSet = Array.isArray(avoidDocumentIds) ? avoidDocumentIds : [avoidDocumentIds];
  return loopTill(
    async (current, count) => {
      const snapshot = firestoreObjectArray.docs[count];
      if (!snapshot || avoidSet.includes(snapshot.id)) return current;
      return filterArrayNull([...current, mapFirestoreDocToObjectType<T>(snapshot)]);
    },
    (data, count) => count < firestoreObjectArray.size && (!limit || data.length < limit),
  );
}
