import {MimeType} from '@coolcolduk/enum';
import {buildObjectWhenExists} from '@coolcolduk/util';
import axios from 'axios';
import {ETSY_API_ENDPOINT} from '../constants';

export interface EtsyAxiosOption {
  contentType?: MimeType;
  params?: any;
}

/**
 * Get axios specifically connects to etsy api
 * @returns
 */
export function getEtsyAxios(apiKey?: string, secret?: string, accessToken?: string, options: EtsyAxiosOption = {}) {
  const {contentType, params} = options;
  const apiKeyHeader = apiKey && secret ? `${apiKey}:${secret}` : apiKey;
  return axios.create({
    baseURL: ETSY_API_ENDPOINT,
    params,
    headers: {
      'Content-Type': contentType ? contentType : MimeType.APPLICATION_JSON,
      ...buildObjectWhenExists('x-api-key', apiKeyHeader),
      ...buildObjectWhenExists('Authorization', accessToken ? `Bearer ${accessToken}` : undefined),
    },
  });
}
