import {FetchResult} from '@apollo/client';

/**
 * validate gql no error
 * @param result
 */
export function validateGqlNoError<T>(result: FetchResult<T>): void {
  if (result.errors && result.errors.length > 0) {
    throw new Error(result.errors[0]!.message || 'Unknown error');
  }
}
