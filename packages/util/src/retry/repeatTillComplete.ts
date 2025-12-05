import {MaybePromise} from '@coolcolduk/typescript-util';
import {sleepMs} from '../sleep/sleepMs';

/**
 *
 * @param fetchFunction - The function to repeat. if result undersired, it should return undefined
 * @param isComplete
 * @param shouldRetry
 * @param delayMs
 * @returns
 */
export async function repeatTillComplete<T>(
  fetchFunction: (prev?: T) => MaybePromise<T>,
  isComplete: (data: T) => MaybePromise<boolean>,
  shouldRetry: (attemptCount: number, data?: T) => MaybePromise<boolean>,
  delayMs: number = 1000,
): Promise<T> {
  let attempts = 0;

  let result: T | undefined;
  while (await shouldRetry(attempts, result)) {
    result = await fetchFunction(result);

    if (await isComplete(result)) {
      return result;
    }

    attempts += 1;
    await sleepMs(delayMs);
  }

  throw new Error('Max retries reached without completing the fetch.');
}
