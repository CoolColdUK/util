import axios from 'axios';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

export interface PingEtsyResponse {
  application_id: number;
}

/**
 * Check to confirm connectivity to the Etsy API with an application
 * @see https://developers.etsy.com/documentation/reference#operation/ping
 * @param apiKey
 * @returns
 */
export function pingEtsy(apiKey: string): EtsyResponse<PingEtsyResponse> {
  return axios.get<PingEtsyResponse>('/application/openapi-ping', getEtsyRequestAxiosConfig({apiKey}));
}
