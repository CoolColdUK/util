import {chunk, filterArrayNull} from '@coolcolduk/util';
import {CollectionReference, DocumentData, FieldPath} from 'firebase-admin/firestore';
import {mapFirestoreDocsToObjectTypeArray} from '../../map/mapFirestoreDocsToObjectTypeArray';
import {WithId} from '../../type/WithId';

/**
 * Bulk get documents by id
 * @param collectionReference - The collection reference to get the documents from
 * @param ids - The ids of the documents to get
 * @returns The documents
 */
export async function bulkGetFirestoreDocsById<T extends object>(
  collectionReference: CollectionReference<T, DocumentData>,
  ids: string[],
): Promise<WithId<T>[]> {
  const chunkedIds = chunk(ids, 30);
  const docRefs = await Promise.all(
    chunkedIds.map(async (chunk) => {
      return collectionReference.where(FieldPath.documentId(), 'in', chunk).get();
    }),
  );

  return filterArrayNull(docRefs.map((docRef) => mapFirestoreDocsToObjectTypeArray(docRef)).flat());
}
