import {randomNumberRange} from '../number/randomNumberRange';

/**
 * Sleep function
 * @param ms duration to wait for
 * @param upperMs when provided, a random duration will be used between `ms` and `upperMs`
 * @returns
 */
export function sleepMs(ms: number, upperMs?: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, upperMs ? randomNumberRange(ms, upperMs, true) : ms);
  });
}
