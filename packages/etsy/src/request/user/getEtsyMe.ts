import axios from 'axios';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

export interface GetEtsyMeResponse {
  /** The numeric ID of a user. This number is also a valid shop ID for the user's shop. */
  user_id: number;
  /** The unique positive non-zero numeric ID for an Etsy Shop. */
  shop_id: number;
}

/**
 * Returns basic info for the user making the request.
 * @see https://developers.etsy.com/documentation/reference#operation/getMe
 * @requires scope shops_r
 * @param apiKey
 * @param accessToken
 * @returns
 */
export function getEtsyMe(apiKey: string, accessToken: string): EtsyResponse<GetEtsyMeResponse> {
  return axios.get<GetEtsyMeResponse>(`/application/users/me`, getEtsyRequestAxiosConfig({apiKey, accessToken}));
}
