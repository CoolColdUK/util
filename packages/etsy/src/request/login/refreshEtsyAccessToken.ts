import axios, {AxiosResponse} from 'axios';
import {EtsyToken} from '../../interfaces/EtsyToken';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Post to etsy to refresh token
 * @returns
 */
export async function refreshEtsyAccessToken(
  apiKey: string,
  refreshToken: string,
): Promise<AxiosResponse<EtsyToken, any>> {
  const body = JSON.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: apiKey,
  });

  return axios.post<EtsyToken>('/public/oauth/token', body, getEtsyRequestAxiosConfig());
}
