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
 * Firebase service for collection in two level of sub collection (e.g. /user/{docId}/subCollection/{docId}/subSubCollection/{docId})
 * @param parentCollectionName - The name of the parent collection.
 * @param collectionName - The name of the sub-collection.
 * @param options - Optional configuration including converter
 * @return A class with static methods to get the collection, get a document, and create a document.
 */
export function createFirestoreSubSubCollectionService<FirestoreType extends object>(
  firestoreApp: Firestore,
  grandCollectionName: string,
  parentCollectionName: string,
  collectionName: string,
  createFirestoreOption?: CreateFirestoreOption<FirestoreType>,
) {
  class FirestoreSubSubCollectionService {
    static collectionName = collectionName;

    /**
     * Get the collection reference for the sub-collection.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @return The collection reference for the sub-collection.
     */
    static getCollection(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
    ): CollectionReference<FirestoreType> {
      const collection = firestoreApp.collection(
        [grandCollectionName, grandCollectionDocId, parentCollectionName, parentCollectionDocId, collectionName].join(
          '/',
        ),
      ) as CollectionReference<FirestoreType>;
      return createFirestoreOption?.converter ? collection.withConverter(createFirestoreOption.converter) : collection;
    }

    /**
     * Get the document reference for the sub-collection.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param docId - The id of the document.
     * @return The document reference for the sub-collection.
     */
    static getDoc(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      docId: string,
    ): DocumentReference<FirestoreType> {
      return FirestoreSubSubCollectionService.getCollection(grandCollectionDocId, parentCollectionDocId).doc(
        docId,
      ) as DocumentReference<FirestoreType>;
    }

    /**
     * Get the collection query for the collection.
     * @return The collection query for the collection.
     */
    static getCollectionQuery(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      options?: QueryOptions,
    ): Query<FirestoreType, DocumentData> {
      return firestoreQuery(
        FirestoreSubSubCollectionService.getCollection(grandCollectionDocId, parentCollectionDocId),
        options,
      );
    }

    /**
     * Create a document in the sub-collection.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param data - The data to create the document with.
     * @param id - The id of the document.
     * @return The document with the id.
     */
    static create(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      data: FirestoreType,
      id?: string,
    ): Promise<WithId<FirestoreType>> {
      return firestoreCreate<FirestoreType>(
        FirestoreSubSubCollectionService.getCollection(grandCollectionDocId, parentCollectionDocId),
        data,
        id,
      );
    }

    /**
     * Get a document from the sub-collection.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param id - The id of the document.
     * @return The document.
     */
    static get(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      id: string,
    ): Promise<Maybe<WithId<FirestoreType>>> {
      return firestoreGet<FirestoreType>(
        FirestoreSubSubCollectionService.getDoc(grandCollectionDocId, parentCollectionDocId, id),
      );
    }

    /**
     * Get a document from the sub-collection. Guarantees the document is not null.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param id - The id of the document.
     * @param errorMessage - The error message to return if the document is not found.
     * @param validation - The validation function to run on the document. THrows if invalid
     * @throws when document not found
     * @return The document.
     */
    static async getValidated(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      id: string,
      errorMessage?: string | (() => Error),
      validation?: (data: WithId<FirestoreType>) => MaybePromise<void>,
    ): Promise<WithId<FirestoreType>> {
      const data = throwIfNull(
        await FirestoreSubSubCollectionService.get(grandCollectionDocId, parentCollectionDocId, id),
        errorMessage || `Document ${grandCollectionDocId}/${parentCollectionDocId}/${id} not found`,
      );
      if (validation) {
        await validation(data);
      }
      return data;
    }

    /**
     * Get multiple documents from the sub-collection.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param ids - The ids of the documents.
     * @return The documents.
     */
    static bulkGetById(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      ids: string[],
    ): Promise<WithId<FirestoreType>[]> {
      return bulkGetFirestoreDocsById(
        FirestoreSubSubCollectionService.getCollection(grandCollectionDocId, parentCollectionDocId),
        ids,
      );
    }

    /**
     * List all documents in the sub-collection.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param options - The options for the list.
     * @return The documents.
     */
    static filter(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      options?: QueryOptions,
    ): Promise<WithId<FirestoreType>[]> {
      return firestoreFilter(
        FirestoreSubSubCollectionService.getCollection(grandCollectionDocId, parentCollectionDocId),
        options,
      );
    }

    /**
     * Get the snapshot of the documents in the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param options - The options for the list.
     * @return The snapshot of the documents.
     */
    static filterSnapshot(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      options?: QueryOptions,
    ): Promise<QuerySnapshot<FirestoreType>> {
      return firestoreFilterSnapshot(
        FirestoreSubSubCollectionService.getCollection(grandCollectionDocId, parentCollectionDocId),
        options,
      );
    }

    /**
     * Update a document in the sub-collection.
     * @throws SuperError if document does not exist
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param id - The id of the document.
     * @param data - The data to update the document with.
     * @return The updated document.
     */
    static update(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      id: string,
      data: UpdateData<FirestoreType>,
    ): Promise<WithId<FirestoreType>> {
      return firestoreUpdate(
        FirestoreSubSubCollectionService.getDoc(grandCollectionDocId, parentCollectionDocId, id),
        data,
      );
    }

    /**
     * Upsert a document in the sub-collection.
     * - create if not exists
     * - replace if exists
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param id - The id of the document.
     * @param data - The data to update the document with.
     * @return The updated document.
     */
    static upsert(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      id: string,
      data: Partial<FirestoreType>,
    ): Promise<WithId<FirestoreType>> {
      return firestoreUpsert(
        FirestoreSubSubCollectionService.getDoc(grandCollectionDocId, parentCollectionDocId, id),
        data,
      );
    }

    /**
     * Delete a document from the sub-collection.
     * @param grandCollectionDocId - The id of the grand collection document.
     * @param parentCollectionDocId - The id of the parent collection document.
     * @param id - The id of the document.
     * @return The write result.
     */
    static delete(
      grandCollectionDocId: string,
      parentCollectionDocId: string,
      id: string,
    ): Promise<FirebaseFirestore.WriteResult> {
      return firestoreDelete(FirestoreSubSubCollectionService.getDoc(grandCollectionDocId, parentCollectionDocId, id));
    }
  }

  return FirestoreSubSubCollectionService;
}
