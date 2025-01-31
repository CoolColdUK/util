import {AxiosResponse} from 'axios';

export interface EtsyList<T> {
  /** The total number of items. */
  count: number;

  results: T[];
}

export type EtsyResponse<T> = Promise<AxiosResponse<T>>;

export type EtsyResponseMany<T> = EtsyResponse<EtsyList<T>>;
