import axios, {AxiosResponse} from 'axios';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

export interface PingEtsyResponse {
  application_id: number;
}

/**
 * Check to confirm connectivity to the Etsy API with an application
 * @param apiKey
 * @returns
 */
export function pingEtsy(apiKey: string): Promise<AxiosResponse<PingEtsyResponse>> {
  return axios.get<PingEtsyResponse>('/application/openapi-ping', getEtsyRequestAxiosConfig({apiKey}));
}
