import {buildObjectWhenExists} from '@coolcolduk/util';
import {AxiosRequestConfig} from 'axios';
import {ETSY_API_ENDPOINT} from '../constants';

export interface RequestOption {
  apiKey?: string;
  accessToken?: string;
}
export default function getEtsyRequestAxiosConfig(options: RequestOption = {}): AxiosRequestConfig {
  return {
    baseURL: ETSY_API_ENDPOINT,
    headers: {
      'Content-Type': 'application/json',
      ...buildObjectWhenExists('x-api-key', options.apiKey),
      ...buildObjectWhenExists('Authorization', options.accessToken ? `Bearer ${options.accessToken}` : undefined),
    },
  };
}
