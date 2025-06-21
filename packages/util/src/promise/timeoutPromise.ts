/**
 * Generate a promise that rejects after a specified timeout.
 * This is useful for implementing timeouts in asynchronous operations.
 * @param timeoutMs in milliseconds
 * @param errorMessage
 * @returns
 */
export function timeoutPromise(timeoutMs: number, errorMessage: string) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(errorMessage)), timeoutMs);
  });
}
