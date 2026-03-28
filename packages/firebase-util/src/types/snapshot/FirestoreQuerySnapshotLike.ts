import {FirestoreDocSnapshotWithIdAndData} from './FirestoreDocSnapshotWithIdAndData';

/**
 * Query snapshot with docs array and size. Compatible with QuerySnapshot.
 */
export interface FirestoreQuerySnapshotLike<T = unknown> {
  docs: FirestoreDocSnapshotWithIdAndData<T>[];
  size: number;
}
