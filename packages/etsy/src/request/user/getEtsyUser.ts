import axios from 'axios';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {EtsyUser} from '../../interfaces/EtsyUser';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Retrieves a user profile based on a unique user ID. Access is limited to profiles of the authenticated user or linked buyers. For the primary_email field, specific app-based permissions are required and granted case-by-case.
 * @see https://developers.etsy.com/documentation/reference#operation/getUser
 * @requires scope email_r
 * @param apiKey
 * @param accessToken
 * @param userId
 * @returns
 */
export function getEtsyUser(apiKey: string, accessToken: string, userId: string): EtsyResponse<EtsyUser> {
  return axios.get<EtsyUser>(`/application/users/${userId}`, getEtsyRequestAxiosConfig({apiKey, accessToken}));
}
