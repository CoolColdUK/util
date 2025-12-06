import {Maybe} from '@coolcolduk/typescript-util';
import {DocumentSnapshot, QueryDocumentSnapshot} from 'firebase-admin/firestore';
import {WithId} from '../type/WithId';

/**
 * Get the object type from the firestore object
 * - return null if not found
 * - extract id and append to data
 * @param firestoreObject
 * @returns
 */
export function mapFirestoreDocToObjectType<T>(
  firestoreObject?:
    | DocumentSnapshot<T, FirebaseFirestore.DocumentData>
    | QueryDocumentSnapshot<T, FirebaseFirestore.DocumentData>
    | null,
): Maybe<WithId<T>> {
  if (!firestoreObject) return null;
  const {id} = firestoreObject;
  const data = firestoreObject.data();
  if (!data) {
    return null;
  }
  return {...data, id};
}
