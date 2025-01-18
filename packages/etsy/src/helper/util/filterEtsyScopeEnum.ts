import {MaybeArray} from '@coolcolduk/typescript-util';
import {castArray, mapStringToEnumValue} from '@coolcolduk/util';
import {EtsyScopeEnum} from '../../enum/EtsyScopeEnum';

/**
 * process scope and remove invalid ones
 * @param queryScope
 * @returns
 */
export function filterEtsyScopeEnum(queryScope: MaybeArray<string>) {
  const scope = castArray(queryScope || '')
    .join(',')
    .split(',');
  return scope.map((v) => mapStringToEnumValue(EtsyScopeEnum, v)).filter((v) => !!v);
}
