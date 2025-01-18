import axios from 'axios';
import {ETSY_API_ENDPOINT} from '../../constants';
import getEtsyRequestAxiosConfig from '../getEtsyRequestAxiosConfig';

export interface PingEtsyResponse {
  application_id: number;
}

export function pingEtsy(apiKey: string) {
  return axios.get<PingEtsyResponse>(
    ETSY_API_ENDPOINT + '/application/openapi-ping',
    getEtsyRequestAxiosConfig({apiKey}),
  );
}
