import {MaybeArray} from '@coolcolduk/typescript-util';
import {CorsOptions} from 'cors';
import {ExpressMethod} from '../enum/ExpressMethod';
import {CustomOrigin} from '../interface/CustomOrigin';
import {StaticOrigin} from '../interface/StaticOrigin';

export function buildCorsOption(
  origin?: MaybeArray<StaticOrigin> | CustomOrigin,
  methods?: MaybeArray<ExpressMethod>,
  options: Omit<CorsOptions, 'origin' | 'methods'> = {},
): CorsOptions {
  return {
    origin,
    methods,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    ...options,
  };
}
