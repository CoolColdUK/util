import {EnumType} from '@coolcolduk/typescript-util';
import {throwIfUndefined} from '../trythrow/throwIfUndefined';
import {mapStringToEnumValue} from './mapStringToEnumValue';

/**
 * convert string to enum
 * @param enumObject the enum object
 * @param value value of enum
 * @returns undefined if string does not belong to enum, otherwise return enum
 */
export function mapStringToEnumValueValidated<T extends EnumType>(
  enumObject: T,
  value: string | number,
  errorMessage?: string,
): T[keyof T] {
  const rtn = mapStringToEnumValue(enumObject, value);
  return throwIfUndefined(rtn, errorMessage ?? `Invalid value for enum ${enumObject}: ${value}`);
}
