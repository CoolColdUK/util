import {FetchResult} from '@apollo/client';
import {throwIfUndefinedNull} from '@coolcolduk/util';

/**
 * throw if gql error, otherwise return the result data
 * @param result
 * @returns
 */
export function throwIfGqlError<T>(result: FetchResult<T>): T {
  if (result.errors && result.errors.length > 0) {
    throw new Error(result.errors[0]!.message || 'Unknown error');
  }

  return throwIfUndefinedNull(result.data, 'No data returned from GQL');
}
