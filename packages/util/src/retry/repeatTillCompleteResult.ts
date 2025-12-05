import {MaybePromise} from '@coolcolduk/typescript-util';
import {repeatTillComplete} from './repeatTillComplete';

/**
 *
 * @param fetchFunction - The function to repeat. if result undersired, it should return undefined
 * @param isComplete
 * @param shouldRetry
 * @param delayMs
 * @deprecated will move to coolcolduk/util
 * @returns
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
