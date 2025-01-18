/**
 * convert string to enum
 * @param enumObject the enum object
 * @param value
 * @returns undefined if string does not belong to enum, otherwise return enum
 */
export function mapStringToEnumValue<T extends {[key: number | string]: string | number}>(
  enumObject: T,
  value: string | number,
): T[keyof T] | undefined {
  return Object.values(enumObject).includes(value) ? (value as unknown as T[keyof T]) : undefined;
}
