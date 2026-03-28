/**
 * Document snapshot with id and data. Compatible with DocumentSnapshot / QueryDocumentSnapshot.
 */
export interface FirestoreDocSnapshotWithIdAndData<T = unknown> {
  id: string;
  data(): T | undefined;
}
