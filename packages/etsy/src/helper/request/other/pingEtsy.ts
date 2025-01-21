import axios from 'axios';
import {ETSY_API_ENDPOINT} from '../../../constants';
import getEtsyRequestAxiosConfig from '../../getEtsyRequestAxiosConfig';

export interface PingEtsyResponse {
  application_id: number;
}

/**
 * Check to confirm connectivity to the Etsy API with an application
 * @param apiKey
 * @returns
 */
export function pingEtsy(apiKey: string) {
  return axios.get<PingEtsyResponse>(
    ETSY_API_ENDPOINT + '/application/openapi-ping',
    getEtsyRequestAxiosConfig({apiKey}),
  );
}
