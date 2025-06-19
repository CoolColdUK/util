import {safeParseFloat} from './safeParseFloat';

/**
 * run parseFloat safely and return default value if error or NaN
 * @param value
 * @param defaultValue
 * @returns
 */
export function safeParseFloatWithDefault(value: string, defaultValue: number): number {
  return safeParseFloat(value) ?? defaultValue;
}
