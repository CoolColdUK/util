import {DocumentReference} from 'firebase-admin/firestore';

/**
 * Deletes a Firestore document in the given collection by id.
 * @param doc - The document reference to delete
 * @return The write result
 */
export function firestoreDelete<T extends object>(doc: DocumentReference<T>): Promise<FirebaseFirestore.WriteResult> {
  return doc.delete();
}
