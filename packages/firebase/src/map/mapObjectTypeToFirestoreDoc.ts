import {WithId} from '@coolcolduk/typescript-util';
import {omit} from '@coolcolduk/util';

/**
 * Map an object type to a firestore document (remove id)
 * @param data - The object type to map to a firestore object
 * @returns The firestore object
 */
export function mapObjectTypeToFirestoreDoc<T extends object>(data: WithId<T>): T {
  return omit(data, 'id') as T;
}
