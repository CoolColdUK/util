import {undefinedIfThrowSync} from '../trythrow';

/**
 * json parse a string
 * @param inputStr string to be parsed
 * @param validate optional validate function
 * @returns
 */
export function jsonParseSafe<T>(inputStr?: string, validate?: (d: T | undefined) => T | undefined): T | undefined {
  if (!inputStr) return undefined;

  const rtn = undefinedIfThrowSync<T>(() => JSON.parse(inputStr));
  return validate ? validate(rtn) : rtn;
}
