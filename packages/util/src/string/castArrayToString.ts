import {castArray} from '../array';

/**
 * cast string | string[] to string
 * @param strArr
 * @param delimiter
 * @returns
 */
export function castArrayToString(strArr: string | string[], delimiter = ',') {
  return castArray(strArr).join(delimiter);
}
