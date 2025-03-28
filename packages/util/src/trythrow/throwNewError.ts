import {MaybePromise} from '@coolcolduk/typescript-util';

/**
 * Override a thrown error with a different error
 * @param fn
 * @param err
 * @returns
 */
export async function throwNewError<T, E extends Error>(
  fn: () => MaybePromise<T>,
  err: string | ((e: any) => E),
): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    throw typeof err === 'string' ? new Error(err) : err(e);
  }
}
