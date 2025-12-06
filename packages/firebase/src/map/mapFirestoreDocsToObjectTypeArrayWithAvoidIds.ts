import {MaybeArray} from '@coolcolduk/typescript-util';
import {filterArrayNull, loopTill} from '@coolcolduk/util';
import {QuerySnapshot} from 'firebase-admin/firestore';
import {WithId} from '../type/WithId';
import {mapFirestoreDocsToObjectTypeArray} from './mapFirestoreDocsToObjectTypeArray';
import {mapFirestoreDocToObjectType} from './mapFirestoreDocToObjectType';

/**
 * Get the object type from the firestore object with avoid ids
 * @param firestoreObjectArray - The firestore object array to map
 * @param avoidDocumentIds - The document ids to avoid
 * @param limit - The limit of the documents to return
 * @returns The object type array
 */
export async function mapFirestoreDocsToObjectTypeArrayWithAvoidIds<T>(
  firestoreObjectArray: QuerySnapshot<T, FirebaseFirestore.DocumentData> | null | undefined,
  avoidDocumentIds?: MaybeArray<string>,
  limit?: number,
): Promise<WithId<T>[]> {
  if (!firestoreObjectArray) return [];
  if (!avoidDocumentIds || avoidDocumentIds.length === 0) {
    return mapFirestoreDocsToObjectTypeArray(firestoreObjectArray);
  }

  return loopTill(
    async (current, count) => {
      const snapshot = firestoreObjectArray.docs[count];

      if (!snapshot || avoidDocumentIds.includes(snapshot.id)) {
        return current;
      }
      return filterArrayNull([...current, mapFirestoreDocToObjectType(snapshot)]);
    },
    (data, count) => count < firestoreObjectArray.size && (!limit || data.length < limit),
  );
}
