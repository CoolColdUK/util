export interface RetryOptions {
  /** number of times to try, 1 means no retry. (default: 3) */
  numberOfTries?: number;
  /** function to delay before retry */
  delay?: () => Promise<void> | void;
  /** can fail and throw error early */
  shouldRetry?: (error: any) => boolean;
}

/**
 * Retry a function
 * @returns
 */
export async function retry<Return>(fn: (index: number) => Return | Promise<Return>, options: RetryOptions = {}) {
  const {delay, shouldRetry, numberOfTries = 3} = options;

  for (let i = 0; i < numberOfTries; i += 1) {
    try {
      // eslint-disable-next-line no-await-in-loop
      return await fn(i);
    } catch (e) {
      if (i === numberOfTries - 1) throw e;
      // can decide to retry or not
      if (shouldRetry && !shouldRetry(e)) throw e;

      // eslint-disable-next-line no-await-in-loop
      if (delay) await delay();
    }
  }

  throw new Error('Exceed retry count');
}
