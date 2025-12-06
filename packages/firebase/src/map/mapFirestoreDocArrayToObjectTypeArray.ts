import {filterArrayNull} from '@coolcolduk/util';
import {QuerySnapshot} from 'firebase-admin/firestore';
import {WithId} from '../type/WithId';
import {mapFirestoreDocToObjectType} from './mapFirestoreDocToObjectType';

/**
 * Get the object type from the firestore object
 * - return null if not found
 * - extract id and append to data
 * @param firestoreObject
 * @returns
 */
export function mapFirestoreDocArrayToObjectTypeArray<T>(
  firestoreObjectArray?: QuerySnapshot<T, FirebaseFirestore.DocumentData> | null,
): WithId<T>[] {
  if (!firestoreObjectArray) return [];
  return filterArrayNull(firestoreObjectArray.docs.map((doc) => mapFirestoreDocToObjectType(doc)));
}
