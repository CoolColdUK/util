import {Maybe} from '@coolcolduk/typescript-util';
import {DocumentReference} from 'firebase-admin/firestore';
import {WithId} from '../type/WithId';
import {firestoreGet} from './firestoreGet';

/**
 * Upserts a Firestore document in the given collection by id, and returns the upserted document with its id.
 * - Creates if not exists
 * - Replaces if exists
 * @param doc - The document reference to upsert
 * @param data - The data to upsert the document with
 * @return The upserted document with the id, or null if not found
 */
export async function firestoreUpsert<T extends object>(
  doc: DocumentReference<T>,
  data: Partial<T>,
): Promise<Maybe<WithId<T>>> {
  await doc.set({...data}, {merge: false});
  return firestoreGet(doc);
}
