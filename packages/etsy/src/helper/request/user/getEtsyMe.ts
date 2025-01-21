import axios from 'axios';
import {ETSY_API_ENDPOINT} from '../../../constants';
import getEtsyRequestAxiosConfig from '../../getEtsyRequestAxiosConfig';

export interface GetEtsyMeResponse {
  /** The numeric ID of a user. This number is also a valid shop ID for the user's shop. */
  user_id: number;
  /** The unique positive non-zero numeric ID for an Etsy Shop. */
  shop_id: number;
}

/**
 * Returns basic info for the user making the request.
 * @requires scope shops_r
 * @param apiKey
 * @param accessToken
 * @returns
 */
export function getEtsyMe(apiKey: string, accessToken: string) {
  return axios.get<GetEtsyMeResponse>(
    ETSY_API_ENDPOINT + `/application/users/me`,
    getEtsyRequestAxiosConfig({apiKey, accessToken}),
  );
}
