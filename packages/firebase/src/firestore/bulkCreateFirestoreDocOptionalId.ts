import {PartialBy} from '@coolcolduk/typescript-util';
import {
  filterArrayDuplicates,
  filterArrayUndefined,
  get,
  mapPromiseFnSeries,
  omit,
  uniqueArrayByKey,
} from '@coolcolduk/util';
import {CollectionReference, Firestore} from 'firebase-admin/firestore';
import {WithId} from '../type/WithId';

export type BulkCreateFirestoreDocOptionalIdOptions = {
  /**
   * If true, the function will throw an error if a document with the same id already exists, otherwise it will be skipped
   */
  failIfExists?: boolean;
};

/**
 *
 * @param data
 */
function validateDuplicatedId<T extends {id?: string}>(data: T[]) {
  const allIds = filterArrayUndefined(data.map((d) => d.id));
  const duplicatedIds = filterArrayDuplicates(allIds);
  if (duplicatedIds.length > 0) {
    throw new Error(`Duplicate IDs found: ${duplicatedIds.join(', ')}`);
  }
}

/**
 * Create a document in firebase with an optional id
 * @param data - The data to add to the document
 * @param collectionReference - The collection reference to add the document to
 * @param docReference - The document reference to get the document from
 * @return The document with the id
 */
export default async function bulkCreateFirestoreDocOptionalId<T extends object>(
  firestoreApp: Firestore,
  collectionReference: CollectionReference<Omit<T, 'id'>>,
  data: PartialBy<WithId<T>, 'id'>[],
  options: BulkCreateFirestoreDocOptionalIdOptions = {},
): Promise<WithId<T>[]> {
  if (options?.failIfExists) {
    validateDuplicatedId(data);
  }

  const dataWithoutDuplicatedId = options.failIfExists ? data : uniqueArrayByKey(data, 'id');

  const batch = firestoreApp.batch();
  const transactions: WithId<T>[] = [];

  await mapPromiseFnSeries(dataWithoutDuplicatedId, async (d: PartialBy<WithId<T>, 'id'>) => {
    const newData = {...d}; // convert class object to plain object
    const dataWithoutId = omit(newData, 'id') as Omit<T, 'id'>;
    const id = get<string | undefined>(d, 'id');

    const doc = id ? collectionReference.doc(id) : collectionReference.doc();
    const docId = id || doc.id;

    batch.create(doc, dataWithoutId);

    transactions.push({...d, id: docId} as WithId<T>);
  });

  await batch.commit();
  return transactions;
}
