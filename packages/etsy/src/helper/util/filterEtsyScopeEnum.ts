import {MaybeArray} from '@coolcolduk/typescript-util';
import {castArray, filterArrayUndefined, mapStringToEnumValue} from '@coolcolduk/util';
import {Request} from 'express';
import {EtsyScopeEnum} from '../../enum/EtsyScopeEnum';

/**
 * process scope and remove invalid ones
 * @param queryScope
 * @returns
 */
export function filterEtsyScopeEnum(queryScope?: MaybeArray<Request['query'] | string>): EtsyScopeEnum[] {
  const scopeStr = castArray(queryScope || '').join(',');
  if (typeof scopeStr !== 'string') throw new Error('scope is not string');
  const scopeArr = scopeStr.split(',');
  const filteredScopeArr = scopeArr.map((v) => mapStringToEnumValue(EtsyScopeEnum, v));
  // minimum email read
  return [EtsyScopeEnum.EMAIL_READ, ...filterArrayUndefined(filteredScopeArr)];
}
