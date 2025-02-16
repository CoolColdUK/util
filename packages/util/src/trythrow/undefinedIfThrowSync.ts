/**
 * Run a function and return undefined if thrown
 * @param fn function to run
 * @param handleError allow logging or re-throw error in certain case
 * @returns
 */
export function undefinedIfThrowSync<T>(fn: () => T, handleError?: (e: any) => void): T | undefined {
  try {
    const rtn = fn();
    return rtn;
  } catch (e) {
    if (handleError) {
      handleError(e);
    }
  }
  return undefined;
}
