import {MaybePromise} from '@coolcolduk/typescript-util';
import {sleepMs} from '../sleep';

export async function repeatTillComplete<T>(
  fetchFunction: (prev?: T) => MaybePromise<T>,
  isComplete: (data: T) => boolean,
  shouldRetry: (count: number, data?: T) => boolean,
  delayMs: number = 1000,
): Promise<T> {
  let attempts = 0;

  let result: T | undefined;
  while (shouldRetry(attempts, result)) {
    result = await fetchFunction(result);

    if (isComplete(result)) {
      return result;
    }

    attempts++;
    await sleepMs(delayMs);
  }

  throw new Error('Max retries reached without completing the fetch.');
}
