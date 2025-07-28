import {mapLimit as asyncMapLimit} from 'async';

/**
 * Wrapper syntax for async mapLimit
 * @param arr
 * @param func
 * @param limit
 * @deprecated does not work yet, need more testing
 * @returns
 */
export async function mapPromiseLimit<T, R>(arr: T[], func: (data: T) => Promise<R>, limit: number): Promise<R[]> {
  return asyncMapLimit(arr, limit, func);
}
