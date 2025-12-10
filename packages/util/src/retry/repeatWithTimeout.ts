import {MaybePromise} from '@coolcolduk/typescript-util';
import {withTimeout} from '../promise/withTimeout';
import {repeatTillComplete} from './repeatTillComplete';
export interface RepeatWithTimeoutOptions<T> {
  /** The allowed outputs to restrict acceptable outcome, otherwise will return when result is not undefined */
  allowedOutputs?: T[];
  /** The timeout in milliseconds (default: 10000) for the whole process */
  timeoutMs?: number;
  /** The error message to throw if the timeout is reached (default: 'Timeout waiting for result') */
  errorMsg?: string;
}

/**
 * Repeats a function until it returns a result or the timeout is reached
 * @param fn - The function to repeat. if result undersired, it should return undefined
 * @param options - The options for the repeat with timeout
 * @returns The result of the function
 */
export async function repeatWithTimeout<T>(
  fn: () => MaybePromise<T>,
  options?: RepeatWithTimeoutOptions<T>,
): Promise<T> {
  const {allowedOutputs = [], timeoutMs = 10000, errorMsg = 'Timeout waiting for result'} = options || {};
  // Use timeoutLoop to wait for auth state to be determined
  return withTimeout(
    repeatTillComplete(
      fn,
      (result) => (allowedOutputs.length > 0 ? allowedOutputs.includes(result) : result !== undefined),
      () => true,
      100,
    ),
    timeoutMs,
    errorMsg,
  );
}
