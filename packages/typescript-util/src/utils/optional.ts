import {NullablePartial} from './maybe';

/**
 * Make certain key optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make certain key required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Make certain key nullable
 */
export type NullableBy<T, K extends keyof T> = Omit<T, K> & NullablePartial<Pick<T, K>>;

/**
 * Make certain key nullable
 */
export type NonNullableBy<T, K extends keyof T> = Omit<T, K> & NonNullable<Pick<T, K>>;
