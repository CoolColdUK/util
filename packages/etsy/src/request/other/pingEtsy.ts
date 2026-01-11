import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

export interface PingEtsyResponse {
  application_id: number;
}

/**
 * Check to confirm connectivity to the Etsy API with an application
 * @see https://developers.etsy.com/documentation/reference#operation/ping
 * @param apiKey
 * @param secret
 * @returns
 */
export function pingEtsy(apiKey: string, secret: string): EtsyResponse<PingEtsyResponse> {
  return getEtsyAxios(apiKey, secret).get<PingEtsyResponse>('/application/openapi-ping');
}
