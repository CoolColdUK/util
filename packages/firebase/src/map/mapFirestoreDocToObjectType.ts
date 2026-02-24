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
export function mapFirestoreDocToObjectType<
  AppModelType = FirebaseFirestore.DocumentData,
  DbModelType extends FirebaseFirestore.DocumentData = FirebaseFirestore.DocumentData,
>(
  firestoreObject?:
    | DocumentSnapshot<AppModelType, DbModelType>
    | QueryDocumentSnapshot<AppModelType, DbModelType>
    | null,
): Maybe<WithId<AppModelType>> {
  if (!firestoreObject) return null;
  const {id} = firestoreObject;
  const data = firestoreObject.data();
  if (!data) {
    return null;
  }
  return {...data, id};
}
