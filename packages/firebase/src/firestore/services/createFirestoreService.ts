import {Maybe, MaybePromise} from '@coolcolduk/typescript-util';
import {throwIfNull} from '@coolcolduk/util';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Firestore,
  Query,
  QuerySnapshot,
  UpdateData,
} from 'firebase-admin/firestore';
import {WithId} from '../../type/WithId';
import {bulkGetFirestoreDocsById} from '../utils/bulkGetFirestoreDocsById';
import {firestoreCreate} from '../utils/firestoreCreate';
import {firestoreDelete} from '../utils/firestoreDelete';
import {firestoreFilter} from '../utils/firestoreFilter';
import {firestoreFilterSnapshot} from '../utils/firestoreFilterSnapshot';
import {firestoreGet} from '../utils/firestoreGet';
import {firestoreQuery, QueryOptions} from '../utils/firestoreQuery';
import {firestoreUpdate} from '../utils/firestoreUpdate';
import {firestoreUpsert} from '../utils/firestoreUpsert';
import {CreateFirestoreOption} from './CreateFirestoreOption';

/**
 * Firebase service for collection in root folder (e.g. /user/{docId})
 * @param collectionName
 * @param options - Optional configuration including converter
 * @returns
 */
export function createFirestoreService<FirebaseType extends object>(
  firestoreApp: Firestore,
  collectionName: string,
  createFirestoreOption?: CreateFirestoreOption<FirebaseType>,
) {
  class FirestoreService {
    static collectionName = collectionName;

    /**
     * Get the collection reference for the collection.
     * @return The collection reference for the collection.
     */
    static getCollection(): CollectionReference<FirebaseType> {
      const collection = firestoreApp.collection(collectionName) as CollectionReference<FirebaseType>;
      return createFirestoreOption?.converter ? collection.withConverter(createFirestoreOption.converter) : collection;
    }

    /**
     * Get the collection query for the collection.
     * @return The collection query for the collection.
     */
    static getCollectionQuery(options?: QueryOptions): Query<FirebaseType, DocumentData> {
      return firestoreQuery(FirestoreService.getCollection(), options);
    }

    /**
     * Get the document reference for the collection.
     * @param docId - The id of the document.
     * @return The document reference for the collection.
     */
    static getDoc(docId: string): DocumentReference<FirebaseType> {
      return FirestoreService.getCollection().doc(docId) as DocumentReference<FirebaseType>;
    }

    /**
     * Create a document in the sub-collection.
     * @param data - The data to create the document with.
     * @param id - The id of the document.
     * @return The document with the id.
     */
    static create(data: FirebaseType, id?: string): Promise<WithId<FirebaseType>> {
      return firestoreCreate<FirebaseType>(FirestoreService.getCollection(), data, id);
    }

    /**
     * Get a document from the sub-collection.
     * @param id - The id of the document.
     * @return The document.
     */
    static get(id: string): Promise<Maybe<WithId<FirebaseType>>> {
      return firestoreGet(FirestoreService.getDoc(id));
    }

    /**
     * Get a document from the sub-collection. Guarantees the document is not null.
     * @param id - The id of the document.
     * @param errorMessage - The error message to return if the document is not found.
     * @param validation - The validation function to run on the document. THrows if invalid
     * @throws when document not found
     * @return The document.
     */
    static async getValidated(
      id: string,
      errorMessage?: string | (() => Error),
      validation?: (data: WithId<FirebaseType>) => MaybePromise<void>,
    ): Promise<WithId<FirebaseType>> {
      const data = throwIfNull(await FirestoreService.get(id), errorMessage || `Document ${id} not found`);
      if (validation) {
        await validation(data);
      }
      return data;
    }

    /**
     * Get multiple documents from the sub-collection.
     * @param ids - The ids of the documents.
     * @return The documents.
     */
    static bulkGetById(ids: string[]): Promise<WithId<FirebaseType>[]> {
      return bulkGetFirestoreDocsById(FirestoreService.getCollection(), ids);
    }

    /**
     * List all documents in the sub-collection.
     * @param options - The options for the list.
     * @return The documents.
     */
    static filter(options?: QueryOptions): Promise<WithId<FirebaseType>[]> {
      return firestoreFilter(FirestoreService.getCollection(), options);
    }

    /**
     * Get the snapshot of the documents in the sub-collection.
     * @param options - The options for the list.
     * @return The snapshot of the documents.
     */
    static filterSnapshot(options?: QueryOptions): Promise<QuerySnapshot<FirebaseType>> {
      return firestoreFilterSnapshot(FirestoreService.getCollection(), options);
    }

    /**
     * Update a document in the sub-collection.
     * @param id - The id of the document.
     * @param data - The data to update the document with.
     * @return The updated document.
     */
    static update(id: string, data: UpdateData<FirebaseType>): Promise<WithId<FirebaseType>> {
      return firestoreUpdate(FirestoreService.getDoc(id), data);
    }

    /**
     * Upsert a document in the sub-collection.
     * - create if not exists
     * - merge if exists
     * @param id - The id of the document.
     * @param data - The data to update the document with.
     * @return The updated document.
     */
    static upsert(id: string, data: Partial<FirebaseType>): Promise<WithId<FirebaseType>> {
      return firestoreUpsert(FirestoreService.getDoc(id), data);
    }

    /**
     * Delete a document from the sub-collection.
     * @param id - The id of the document.
     * @return The write result.
     */
    static delete(id: string): Promise<FirebaseFirestore.WriteResult> {
      return firestoreDelete(FirestoreService.getDoc(id));
    }
  }
  return FirestoreService;
}
