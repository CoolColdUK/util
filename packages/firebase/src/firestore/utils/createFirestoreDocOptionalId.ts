import {CollectionReference} from 'firebase-admin/firestore';
import {WithId} from '../../type/WithId';

/**
 * Create a document in firebase with an optional id
 * @throws Error if document already exists
 * @param collectionReference - The collection reference to add the document to
 * @param data - The data to add to the document
 * @param docReference - The document reference to get the document from
 * @return The document with the id
 */
export async function createFirestoreDocOptionalId<T>(
  collectionReference: CollectionReference<T>,
  data: T,
  docId?: string,
): Promise<WithId<T>> {
  const newData = {...data};
  // create with given id
  if (docId) {
    const doc = await collectionReference.doc(docId).get();

    if (doc.exists) {
      throw new Error('Document already exists with id: ' + docId);
    }

    // only resolves when success
    await doc.ref.set(newData);
    return {...newData, id: docId};
  }

  const doc = await collectionReference.add(newData);
  return {...newData, id: doc.id};
}
