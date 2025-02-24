import {get} from 'lodash';

/**
 * check request data if it is an error
 * @param data
 * @returns
 */
export function validateErrorRequest(data: any) {
  if ('errors' in data) {
    throw new Error(get(data, 'errors.0.message'));
  }
  return data;
}
