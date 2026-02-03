import {MaybePromise} from '@coolcolduk/typescript-util';
import {repeatTillComplete} from './repeatTillComplete';

/**
 * Repeatedly call fetchFunction until isComplete(data) is true, collecting all results.
 * @param fetchFunction - Provides the next value. Return undefined for undesired result.
 * @param isComplete - When true, iteration stops.
 * @param shouldRetry - When false, iteration stops even if not complete.
 * @param delayMs - Delay between attempts (default 1000).
 * @returns Array of all collected results.
 */
export async function repeatTillCompleteResult<T>(
  fetchFunction: (prev?: T) => MaybePromise<T>,
  isComplete: (data: T) => MaybePromise<boolean>,
  shouldRetry: (attemptCount: number, data?: T) => MaybePromise<boolean>,
  delayMs: number = 1000,
): Promise<T[]> {
  const results: T[] = [];
  await repeatTillComplete(
    fetchFunction,
    (data) => {
      results.push(data);
      return Promise.resolve(isComplete(data));
    },
    shouldRetry,
    delayMs,
  );
  return results;
}
