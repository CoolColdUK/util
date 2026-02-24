import {WithId} from '@coolcolduk/typescript-util';
import {omit} from '@coolcolduk/util';

/**
 * Map an object with id to Firestore document shape (omit id).
 */
export function mapObjectTypeToFirestoreDoc<T extends object>(data: WithId<T>): T {
  return omit(data, 'id') as T;
}
