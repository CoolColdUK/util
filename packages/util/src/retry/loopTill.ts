import {MaybePromise} from '@coolcolduk/typescript-util';

/**
 * Loop until the condition is met
 * @param fn - The function to call
 * @param shouldContinue - The condition to continue
 * @returns The result
 */
export async function loopTill<T>(
  fn: (current: T[], count: number) => MaybePromise<Promise<T[]>>,
  shouldContinue: (result: T[], count: number) => MaybePromise<boolean>,
): Promise<T[]> {
  let result: T[] = [];
  let count = 0;
  while (await shouldContinue(result, count)) {
    result = await fn(result, count);
    count += 1;
  }
  return result;
}
