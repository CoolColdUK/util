import {CollectionReference, DocumentData, Query} from 'firebase-admin/firestore';
import {Filter} from '../../type/Filter';
import {OrderBy} from '../../type/OrderBy';

export interface QueryOptions {
  limit?: number;
  offset?: number;
  order?: OrderBy;
  where?: Filter[];
}

/**
 * Query documents from a collection using a collection reference
 * @param collectionReference
 * @param options
 * @returns
 */
export function firestoreQuery<T extends object>(
  collectionReference: CollectionReference<T, DocumentData>,
  options: QueryOptions = {},
): Query<T, DocumentData> {
  let docData = collectionReference as Query<T, DocumentData>;

  if (options.where) {
    options.where.forEach((filter) => {
      if (filter.value === undefined) return;
      docData = docData.where(filter.field, filter.operator, filter.value);
    });
  }

  if (options.order) {
    docData = docData.orderBy(options.order.field, options.order.direction);
  }

  if (options.limit) {
    docData = docData.limit(options.limit);
  }

  if (options.offset) {
    docData = docData.offset(options.offset);
  }

  return docData;
}
