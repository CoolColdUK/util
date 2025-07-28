import {filterMapStringTrimEmpty} from './filterMapStringTrimEmpty';

/**
 * convert textbox string to array
 * - break string to array via newline
 * - trim each line
 * - filter empty line
 * @param s
 * @returns
 */
export function castStringToArray(s: string) {
  return filterMapStringTrimEmpty(s.split('\n'));
}
