import {Maybe} from '@coolcolduk/typescript-util';

/**
 * Remove null possibility
 * @param val
 * @param errorMessage
 * @returns
 */
export function throwIfNull<T, E extends Error>(
  val: Maybe<T>,
  errorMessage: string | (() => E) = 'Value not available',
): T {
  if (val === null) {
    if (typeof errorMessage === 'string') {
      throw new Error(errorMessage);
    } else {
      throw errorMessage();
    }
  }
  return val;
}
