import {MaybeArray} from '@coolcolduk/typescript-util';
import {CorsOptions} from 'cors';
import {ExpressMethod} from './ExpressMethod';

export type StaticOrigin = boolean | string | RegExp;

export type CustomOrigin = (
  requestOrigin: string | undefined,
  callback: (err: Error | null, origin?: StaticOrigin) => void,
) => void;

export function getCorsOption(
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
