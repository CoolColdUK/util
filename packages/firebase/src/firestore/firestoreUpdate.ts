import {throwIfNull} from '@coolcolduk/util';
import {DocumentReference, UpdateData} from 'firebase-admin/firestore';
import {WithId} from '../type/WithId';
import {firestoreGet} from './firestoreGet';

/**
 * Updates a Firestore document in the given collection by id, and returns the updated document with its id.
 * @param doc - The document reference to update
 * @param data - The data to update the document with
 * @throws if document not found
 * @return The updated document with the id, or null if not found
 */
export async function firestoreUpdate<T extends object>(
  doc: DocumentReference<T>,
  data: UpdateData<T>,
): Promise<WithId<T>> {
  await doc.update({...data}, {exists: true});
  return throwIfNull(await firestoreGet(doc));
}
