/**
 * Make it promise or not promise
 */
export type MaybePromise<T> = T | Promise<T>;

/**
 * value or possible null
 */
export type Maybe<T> = T | null;

/**
 * value may or may not exists
 */
export type May<T> = T | undefined;

/**
 * Make it array or not array
 */
export type MaybeArray<T> = T | T[];

/**
 * Like partial but for nullable
 */
export type NullablePartial<T> = {[P in keyof T]?: T[P] | null};
