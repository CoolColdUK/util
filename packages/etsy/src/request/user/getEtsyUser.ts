import axios, {AxiosResponse} from 'axios';
import {ETSY_API_ENDPOINT} from '../../constants';
import {EtsyUser} from '../../interfaces/EtsyUser';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Retrieves a user profile based on a unique user ID. Access is limited to profiles of the authenticated user or linked buyers. For the primary_email field, specific app-based permissions are required and granted case-by-case.
 * @requires scope email_r
 * @param apiKey
 * @param accessToken
 * @param userId
 * @returns
 */
export function getEtsyUser(apiKey: string, accessToken: string, userId: string): Promise<AxiosResponse<EtsyUser>> {
  return axios.get<EtsyUser>(
    ETSY_API_ENDPOINT + `/application/users/${userId}`,
    getEtsyRequestAxiosConfig({apiKey, accessToken}),
  );
}
