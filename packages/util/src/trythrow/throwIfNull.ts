import {Maybe} from '@coolcolduk/typescript-util';

/**
 * Remove null possibility
 * @param val
 * @param errorMessage
 * @returns
 */
export function throwIfNull<T>(val: Maybe<T>, errorMessage = 'Value not available'): T {
  if (val === null) {
    throw new Error(errorMessage);
  }
  return val;
}
