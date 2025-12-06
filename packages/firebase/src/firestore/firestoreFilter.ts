import {CollectionReference, DocumentData} from 'firebase-admin/firestore';
import {mapFirestoreDocsToObjectTypeArray} from '../map/mapFirestoreDocsToObjectTypeArray';
import {WithId} from '../type/WithId';
import {firestoreFilterSnapshot} from './firestoreFilterSnapshot';
import {QueryOptions} from './firestoreQuery';

/**
 * get documents based on the filter options
 * @param collectionReference
 * @param options
 * @returns
 */
export async function firestoreFilter<T extends object>(
  collectionReference: CollectionReference<T, DocumentData>,
  options: QueryOptions = {},
): Promise<WithId<T>[]> {
  return mapFirestoreDocsToObjectTypeArray(await firestoreFilterSnapshot(collectionReference, options));
}
