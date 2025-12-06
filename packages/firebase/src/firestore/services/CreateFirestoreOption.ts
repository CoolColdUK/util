import {FirestoreDataConverter} from 'firebase-admin/firestore';

/**
 * Options for creating a Firestore service
 */
export interface CreateFirestoreOption<NewAppModelType> {
  converter?: FirestoreDataConverter<NewAppModelType>;
}
