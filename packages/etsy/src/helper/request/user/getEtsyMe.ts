import axios from 'axios';
import {ETSY_API_ENDPOINT} from '../../../constants';
import getEtsyRequestAxiosConfig from '../../getEtsyRequestAxiosConfig';

export interface GetEtsyMeResponse {
  user_id: number;
  shop_id: number;
}

/**
 * Returns basic info for the user making the request.
 * @requires shops_r
 * @param apiKey
 * @param accessToken
 * @returns
 */
export function getEtsyMe(apiKey: string, accessToken: string, userId: string) {
  return axios.get<GetEtsyMeResponse>(
    ETSY_API_ENDPOINT + `/application/users/${userId}`,
    getEtsyRequestAxiosConfig({apiKey, accessToken}),
  );
}
