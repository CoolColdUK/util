import {mapFirestoreDocToObjectType} from '@coolcolduk/firebase-util';
import {Maybe, WithId} from '@coolcolduk/typescript-util';
import {DocumentReference} from 'firebase-admin/firestore';

export async function firestoreGet<T extends object>(doc: DocumentReference<T>): Promise<Maybe<WithId<T>>> {
  const docData = await doc.get();
  return mapFirestoreDocToObjectType(docData);
}
