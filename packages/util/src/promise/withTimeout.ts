import {timeoutPromise} from './timeoutPromise';

/**
 * Runs a promise with a timeout.
 * If the promise does not resolve within the specified timeout, it will reject with the provided error message.
 * @param promise
 * @param timeout
 * @param errorMessage
 * @returns
 */
export function withTimeout<T>(promise: Promise<T>, timeout: number, errorMessage: string): Promise<T> {
  return Promise.race([promise, timeoutPromise(timeout, errorMessage)]) as Promise<T>;
}
