import {Maybe} from '@coolcolduk/typescript-util';

export function throwIfUndefinedNull<T, E extends Error>(
  val?: Maybe<T>,
  errorMessage: string | (() => E) = 'Value not available',
): T {
  if (val === undefined || val === null) {
    if (typeof errorMessage === 'string') {
      throw new Error(errorMessage);
    } else {
      throw errorMessage();
    }
  }
  return val;
}
