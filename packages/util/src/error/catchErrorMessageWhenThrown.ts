import {MaybePromise} from '@coolcolduk/typescript-util';

/**
 * run function and catch error
 * @param fn
 * @returns error message or undefined when successful
 */
export async function catchErrorMessageWhenThrown(fn: () => MaybePromise<any>): Promise<string | undefined> {
  try {
    await fn();
    return undefined;
  } catch (e: any) {
    return e.message;
  }
}
