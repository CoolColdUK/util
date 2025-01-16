import {MaybePromise} from '@coolcolduk/typescript-util';

/**
 * Run a function and return undefined if thrown
 * @param fn function to run
 * @param handleError allow logging or re-throw error in certain case
 * @returns
 */
export async function undefinedIfThrow<T>(
  fn: () => MaybePromise<T>,
  handleError?: (e: any) => MaybePromise<void>,
): Promise<T | undefined> {
  try {
    const rtn = await fn();
    return rtn;
  } catch (e) {
    if (handleError) {
      await handleError(e);
    }
  }
  return undefined;
}
