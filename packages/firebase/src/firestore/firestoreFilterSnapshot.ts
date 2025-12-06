import {CollectionReference, DocumentData, QuerySnapshot} from 'firebase-admin/firestore';
import {firestoreQuery, QueryOptions} from './firestoreQuery';

/**
 * using collection reference to filter documents
 * @param collectionReference
 * @param options
 * @returns
 */
export function firestoreFilterSnapshot<T extends object>(
  collectionReference: CollectionReference<T, DocumentData>,
  options: QueryOptions = {},
): Promise<QuerySnapshot<T, DocumentData>> {
  return firestoreQuery(collectionReference, options).get();
}
