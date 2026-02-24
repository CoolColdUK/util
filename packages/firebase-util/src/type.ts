/**
 * Minimal snapshot shape for Firestore document snapshots.
 * Compatible with both firebase (client) and firebase-admin QueryDocumentSnapshot
 * so converter functions work in frontend and backend without a firebase dependency.
 */
export interface FirestoreSnapshotWithData<T = unknown> {
  data(): T;
}
