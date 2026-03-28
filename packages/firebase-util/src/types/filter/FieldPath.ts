/**
 * Firestore `FieldPath` shape (e.g. from `firebase/firestore`). Declared for typing only;
 * construct instances from the Firebase SDK at runtime.
 */
export declare class FieldPath {
  constructor(...fieldNames: string[]);
  static documentId(): FieldPath;
  isEqual(other: FieldPath): boolean;
}
