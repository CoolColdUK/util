import axios from 'axios';
import getEtsyRequestAxiosConfig from '../getEtsyRequestAxiosConfig';

/**
 * Post to etsy to refresh token
 * @returns
 */
export async function refreshEtsyAccessToken(apiKey: string, refreshToken: string) {
  const body = JSON.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: apiKey,
  });

  return axios.post('/public/oauth/token', body, getEtsyRequestAxiosConfig());
}
