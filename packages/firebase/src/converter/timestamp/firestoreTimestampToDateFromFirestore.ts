import {mapFirestoreTimestampToDateForObjectValue} from './mapFirestoreTimestampToDateForObjectValue';

export const firestoreTimestampToDateFromFirestore = <T extends object>(
  snapshot: FirebaseFirestore.QueryDocumentSnapshot,
) => {
  const data = snapshot.data() as T;

  // Convert Firestore timestamps to dates recursively
  return mapFirestoreTimestampToDateForObjectValue(data) as T;
};
