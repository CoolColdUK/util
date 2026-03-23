/**
 * Minimal snapshot shape for Firestore document snapshots.
 * Compatible with both firebase (client) and firebase-admin QueryDocumentSnapshot
 * so converter functions work in frontend and backend without a firebase dependency.
 */
export interface FirestoreSnapshotWithData<T = unknown> {
  data(): T;
}

/**
 * Document snapshot with id and data. Compatible with DocumentSnapshot / QueryDocumentSnapshot.
 */
export interface FirestoreDocSnapshotWithIdAndData<T = unknown> {
  id: string;
  data(): T | undefined;
}

/**
 * Query snapshot with docs array and size. Compatible with QuerySnapshot.
 */
export interface FirestoreQuerySnapshotLike<T = unknown> {
  docs: FirestoreDocSnapshotWithIdAndData<T>[];
  size: number;
}

/**
 * This is from firestore
 */
export interface DocumentData {
  /** A mapping between a field and its value. */
  [field: string]: any;
}
