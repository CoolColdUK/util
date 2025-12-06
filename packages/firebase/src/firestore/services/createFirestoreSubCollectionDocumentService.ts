import {Maybe, MaybePromise} from '@coolcolduk/typescript-util';
import {throwIfNull} from '@coolcolduk/util';
import {CollectionReference, DocumentReference, Firestore, UpdateData} from 'firebase-admin/firestore';
import {WithId} from '../../type/WithId';
import {bulkGetFirestoreDocsById} from '../utils/bulkGetFirestoreDocsById';
import {firestoreCreate} from '../utils/firestoreCreate';
import {firestoreDelete} from '../utils/firestoreDelete';
import {firestoreGet} from '../utils/firestoreGet';
import {firestoreUpdate} from '../utils/firestoreUpdate';
import {firestoreUpsert} from '../utils/firestoreUpsert';
import {CreateFirestoreOption} from './CreateFirestoreOption';

/**
 * Firebase service for single document in sub-collection folder (e.g. /user/{docId}/subCollection/{docId})
 * - NOTE: this only works for single document in sub-collection, not for multiple documents in sub-collection
 * - this assumes the documentId is the same as in the parent collection
 * @param parentCollectionName - The name of the parent collection.
 * @param collectionName - The name of the sub-collection. This is also used as the id of the document.
 * @param options - Optional configuration including converter
 * @return A class with static methods to get the collection, get a document, and create a document.
 */
export default function createFirestoreSubCollectionDocumentService<FirestoreType extends object>(
  firestoreApp: Firestore,
  parentCollectionName: string,
  collectionName: string,
  createFirestoreOption?: CreateFirestoreOption<FirestoreType>,
) {
  class FirestoreSubCollectionDocumentService {
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
    static getDoc(collectionDocId: string): DocumentReference<FirestoreType> {
      return FirestoreSubCollectionDocumentService.getCollection(collectionDocId).doc(
        collectionDocId,
      ) as DocumentReference<FirestoreType>;
    }

    /**
     * Create a document in the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param data - The data to create the document with.
     * @param id - The id of the document.
     * @return The document with the id.
     */
    static create(collectionDocId: string, data: FirestoreType): Promise<WithId<FirestoreType>> {
      return firestoreCreate<FirestoreType>(
        FirestoreSubCollectionDocumentService.getCollection(collectionDocId),
        data,
        collectionDocId,
      );
    }

    /**
     * Get a document from the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @return The document.
     */
    static get(collectionDocId: string): Promise<Maybe<WithId<FirestoreType>>> {
      return firestoreGet<FirestoreType>(FirestoreSubCollectionDocumentService.getDoc(collectionDocId));
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
      errorMessage?: string | (() => Error),
      validation?: (data: WithId<FirestoreType>) => MaybePromise<void>,
    ): Promise<WithId<FirestoreType>> {
      const data = throwIfNull(
        await FirestoreSubCollectionDocumentService.get(collectionDocId),
        errorMessage || `Document ${collectionDocId} not found`,
      );
      if (validation) {
        await validation(data);
      }
      return data;
    }

    /**
     * Get multiple documents from the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param ids - The ids of the documents.
     * @return The documents.
     */
    static async bulkGetById(collectionDocId: string, ids: string[]): Promise<WithId<FirestoreType>[]> {
      return bulkGetFirestoreDocsById(FirestoreSubCollectionDocumentService.getCollection(collectionDocId), ids);
    }

    /**
     * Update a document in the sub-collection.
     * @throws SuperError if document does not exist
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @param data - The data to update the document with.
     * @return The updated document.
     */
    static update(collectionDocId: string, data: UpdateData<FirestoreType>): Promise<Maybe<WithId<FirestoreType>>> {
      return firestoreUpdate(FirestoreSubCollectionDocumentService.getDoc(collectionDocId), data);
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
    static upsert(collectionDocId: string, data: Partial<FirestoreType>): Promise<Maybe<WithId<FirestoreType>>> {
      return firestoreUpsert(FirestoreSubCollectionDocumentService.getDoc(collectionDocId), data);
    }

    /**
     * Delete a document from the sub-collection.
     * @param collectionDocId - The id of the collection document.
     * @param id - The id of the document.
     * @return The write result.
     */
    static delete(collectionDocId: string): Promise<FirebaseFirestore.WriteResult> {
      return firestoreDelete(FirestoreSubCollectionDocumentService.getDoc(collectionDocId));
    }
  }

  return FirestoreSubCollectionDocumentService;
}
