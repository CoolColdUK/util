import {EnumType} from '@coolcolduk/typescript-util';

/**
 * convert string to enum
 * @param enumObject the enum object
 * @param value value of enum
 * @returns undefined if string does not belong to enum, otherwise return enum
 */
export function mapStringToEnumValue<T extends EnumType>(
  enumObject: T,
  value: string | number,
): T[keyof T] | undefined {
  return Object.values(enumObject).includes(value) ? (value as unknown as T[keyof T]) : undefined;
}
