import {buildObjectWhenExists} from '@coolcolduk/util';
import {AxiosRequestConfig} from 'axios';
import {ETSY_API_ENDPOINT} from '../constants';

export interface RequestOption {
  apiKey?: string;
  accessToken?: string;
  contentType?: string;
  params?: any;
}

export default function getEtsyRequestAxiosConfig(options: RequestOption = {}): AxiosRequestConfig {
  const {apiKey, accessToken, contentType, params} = options;
  return {
    baseURL: ETSY_API_ENDPOINT,
    params,
    headers: {
      'Content-Type': contentType ? contentType : 'application/json',
      ...buildObjectWhenExists('x-api-key', apiKey),
      ...buildObjectWhenExists('Authorization', accessToken ? `Bearer ${accessToken}` : undefined),
    },
  };
}
