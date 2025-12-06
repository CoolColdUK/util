import {Maybe} from '@coolcolduk/typescript-util';
import {DocumentReference} from 'firebase-admin/firestore';
import {mapFirestoreDocToObjectType} from '../../map/mapFirestoreDocToObjectType';
import {WithId} from '../../type/WithId';

export async function firestoreGet<T extends object>(doc: DocumentReference<T>): Promise<Maybe<WithId<T>>> {
  const docData = await doc.get();
  return mapFirestoreDocToObjectType(docData);
}
