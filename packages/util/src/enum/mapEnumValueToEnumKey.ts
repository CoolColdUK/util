import {EnumType} from '@coolcolduk/typescript-util';

/**
 * Convert enum value to its corresponding key
 * @param enumObject The enum object
 * @param value Value of enum
 * @returns The key of the enum if found, otherwise undefined
 */
export function mapEnumValueToEnumKey<T extends EnumType>(enumObject: T, value: string | number): string | undefined {
  return Object.keys(enumObject).find((key) => enumObject[key] === value);
}
