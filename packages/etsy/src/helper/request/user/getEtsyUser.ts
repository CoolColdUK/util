import axios from 'axios';
import {ETSY_API_ENDPOINT} from '../../../constants';
import getEtsyRequestAxiosConfig from '../../getEtsyRequestAxiosConfig';

export interface GetEtsyUserResponse {
  user_id: number;
  primary_email: string;
  first_name: string;
  last_name: string;
  image_url_75x75: string;
}

/**
 * Retrieves a user profile based on a unique user ID. Access is limited to profiles of the authenticated user or linked buyers. For the primary_email field, specific app-based permissions are required and granted case-by-case.
 * @requires email_r
 * @param apiKey
 * @param accessToken
 * @returns
 */
export function getEtsyUser(apiKey: string, accessToken: string, userId: string) {
  return axios.get<GetEtsyUserResponse>(
    ETSY_API_ENDPOINT + `/application/users/${userId}`,
    getEtsyRequestAxiosConfig({apiKey, accessToken}),
  );
}
