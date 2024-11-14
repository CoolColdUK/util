import {Maybe} from '@coolcolduk/typescript-util';

export function throwIfUndefinedNull<T>(val?: Maybe<T>, errorMessage = 'Value not available'): T {
  if (val === undefined || val === null) {
    throw new Error(errorMessage);
  }
  return val;
}
