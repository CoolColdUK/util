import {safeParseInt} from './safeParseInt';

/**
 * run parseInt safely and return default value if error or NaN
 * @param value
 * @param defaultValue
 * @returns
 */
export function safeParseIntWithDefault(value: string, defaultValue?: number): number | undefined {
  return safeParseInt(value) ?? defaultValue;
}
