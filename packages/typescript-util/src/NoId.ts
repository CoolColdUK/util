/**
 * A type that removes the id property from the given type.
 */
export type NoId<T> = Omit<T, 'id'>;
