import {Maybe} from '@coolcolduk/typescript-util';
import axios, {AxiosResponse} from 'axios';
import {ETSY_API_ENDPOINT} from '../../../constants';
import getEtsyRequestAxiosConfig from '../../getEtsyRequestAxiosConfig';

export interface GetEtsyUserResponse {
  /** The numeric ID of a user. This number is also a valid shop ID for the user's shop. */
  user_id: number;
  /** An email address string for the user's primary email address. Access to this field is granted on a case by case basis for third-party integrations that require full access */
  primary_email: Maybe<string>;
  /** The user's first name. */
  first_name: Maybe<string>;
  /** The user's last name. */
  last_name: Maybe<string>;
  /** The user's avatar URL. */
  image_url_75x75: Maybe<string>;
}

/**
 * Retrieves a user profile based on a unique user ID. Access is limited to profiles of the authenticated user or linked buyers. For the primary_email field, specific app-based permissions are required and granted case-by-case.
 * @requires scope email_r
 * @param apiKey
 * @param accessToken
 * @param userId
 * @returns
 */
export function getEtsyUser(
  apiKey: string,
  accessToken: string,
  userId: string,
): Promise<AxiosResponse<GetEtsyUserResponse>> {
  return axios.get<GetEtsyUserResponse>(
    ETSY_API_ENDPOINT + `/application/users/${userId}`,
    getEtsyRequestAxiosConfig({apiKey, accessToken}),
  );
}
