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
