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
  WriteResult,
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
 * Firebase service for collection in sub-collection folder (e.g. /user/{docId}/subCollection/{docId})
 * @param parentCollectionName - The name of the parent collection.
 * @param collectionName - The name of the sub-collection.
 * @param options - Optional configuration including converter
 * @return A class with static methods to get the collection, get a document, and create a document.
 */
export function createFirestoreSubCollectionService<FirestoreType extends object>(
  firestoreApp: Firestore,
  parentCollectionName: string,
  collectionName: string,
  createFirestoreOption?: CreateFirestoreOption<FirestoreType>,
) {
  class FirestoreSubCollectionService {
    static collectionName = collectionName;

    /**
     * Get the collection reference for the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @return The collection reference for the sub-collection.
     */
    static getCollection(collectionDocId: string): CollectionReference<FirestoreType> {
      const collection = firestoreApp.collection(
        [parentCollectionName, collectionDocId, collectionName].join('/'),
      ) as CollectionReference<FirestoreType>;
      return createFirestoreOption?.converter ? collection.withConverter(createFirestoreOption.converter) : collection;
    }

    /**
     * Get the document reference for the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param docId - The id of the document.
     * @return The document reference for the sub-collection.
     */
    static getDoc(collectionDocId: string, docId: string): DocumentReference<FirestoreType> {
      return FirestoreSubCollectionService.getCollection(collectionDocId).doc(
        docId,
      ) as DocumentReference<FirestoreType>;
    }

    /**
     * Get the collection query for the collection.
     * @return The collection query for the collection.
     */
    static getCollectionQuery(collectionDocId: string, options?: QueryOptions): Query<FirestoreType, DocumentData> {
      return firestoreQuery(FirestoreSubCollectionService.getCollection(collectionDocId), options);
    }

    /**
     * Create a document in the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param data - The data to create the document with.
     * @param id - The id of the document.
     * @return The document with the id.
     */
    static create(collectionDocId: string, data: FirestoreType, id?: string): Promise<WithId<FirestoreType>> {
      return firestoreCreate<FirestoreType>(FirestoreSubCollectionService.getCollection(collectionDocId), data, id);
    }

    /**
     * Get a document from the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @return The document.
     */
    static get(collectionDocId: string, id: string): Promise<Maybe<WithId<FirestoreType>>> {
      return firestoreGet(FirestoreSubCollectionService.getDoc(collectionDocId, id));
    }

    /**
     * Get a document from the sub-collection. Guarantees the document is not null.
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @param errorMessage - The error message to return if the document is not found.
     * @param validation - The validation function to run on the document. THrows if invalid
     * @throws when document not found
     * @return The document.
     */
    static async getValidated(
      collectionDocId: string,
      id: string,
      errorMessage?: string | (() => Error),
      validation?: (data: WithId<FirestoreType>) => MaybePromise<void>,
    ): Promise<WithId<FirestoreType>> {
      const data = throwIfNull(
        await FirestoreSubCollectionService.get(collectionDocId, id),
        errorMessage || `Document ${collectionDocId}/${id} not found`,
      );
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
    static bulkGetById(collectionDocId: string, ids: string[]): Promise<WithId<FirestoreType>[]> {
      return bulkGetFirestoreDocsById(FirestoreSubCollectionService.getCollection(collectionDocId), ids);
    }

    /**
     * List all documents in the sub-collection.
     * @param options - The options for the list.
     * @return The documents.
     */
    static filter(collectionDocId: string, options?: QueryOptions): Promise<WithId<FirestoreType>[]> {
      return firestoreFilter(FirestoreSubCollectionService.getCollection(collectionDocId), options);
    }

    /**
     * Get the snapshot of the documents in the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param options - The options for the list.
     * @return The snapshot of the documents.
     */
    static filterSnapshot(collectionDocId: string, options?: QueryOptions): Promise<QuerySnapshot<FirestoreType>> {
      return firestoreFilterSnapshot(FirestoreSubCollectionService.getCollection(collectionDocId), options);
    }

    /**
     * Update a document in the sub-collection.
     * @throws SuperError if document does not exist
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @param data - The data to update the document with.
     * @return The updated document.
     */
    static update(
      collectionDocId: string,
      id: string,
      data: UpdateData<FirestoreType>,
    ): Promise<WithId<FirestoreType>> {
      return firestoreUpdate(FirestoreSubCollectionService.getDoc(collectionDocId, id), data);
    }

    /**
     * Upsert a document in the sub-collection.
     * - create if not exists
     * - replace if exists
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @param data - The data to update the document with.
     * @return The updated document.
     */
    static upsert(collectionDocId: string, id: string, data: Partial<FirestoreType>): Promise<WithId<FirestoreType>> {
      return firestoreUpsert(FirestoreSubCollectionService.getDoc(collectionDocId, id), data);
    }

    /**
     * Delete a document from the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @return The write result.
     */
    static delete(collectionDocId: string, id: string): Promise<WriteResult> {
      return firestoreDelete(FirestoreSubCollectionService.getDoc(collectionDocId, id));
    }
  }

  return FirestoreSubCollectionService;
}
