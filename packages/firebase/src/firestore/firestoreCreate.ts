import {CollectionReference} from 'firebase-admin/firestore';
import {WithId} from '../type/WithId';
import {createFirestoreDocOptionalId} from './createFirestoreDocOptionalId';

/**
 * Creates a Firestore document in the given collection, with an optional id, and returns the document with its id.
 * @param collectionReference - The collection reference to add the document to
 * @param data - The data to add to the document
 * @param docId - (Optional) The id of the document to create
 * @return The document with the id
 */
export function firestoreCreate<T extends object>(
  collectionReference: CollectionReference<T>,
  data: T,
  docId?: string,
): Promise<WithId<T>> {
  return createFirestoreDocOptionalId(collectionReference, data, docId);
}
