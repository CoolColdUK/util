import {undefinedIfThrowSync} from '../trythrow';

/**
 * json parse a string
 * @param inputStr string to be parsed
 * @param validate optional validate function, throw if invalid
 * @returns
 */
export function safeParseJson<T>(inputStr?: string, validate?: (d: T | undefined) => T): T | undefined {
  if (!inputStr) return undefined;

  const rtn = undefinedIfThrowSync<T>(() => JSON.parse(inputStr));
  return validate ? undefinedIfThrowSync(() => validate(rtn)) : rtn;
}
