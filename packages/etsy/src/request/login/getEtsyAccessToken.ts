import axios from 'axios';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

export interface GetEtsyAccessTokenResponse {
  access_token: string;
  token_type: 'Bearer';
  /** expects 3600 */
  expires_in: 3600;
  refresh_token: string;
}

/**
 * Post to etsy for access token for first login
 * @returns
 */
export async function getEtsyAccessToken(apiKey: string, redirectUri: string, authCode: string, codeVerifier: string) {
  const body = JSON.stringify({
    grant_type: 'authorization_code',
    client_id: apiKey,
    redirect_uri: redirectUri,
    code: authCode,
    code_verifier: codeVerifier,
  });

  return axios.post<GetEtsyAccessTokenResponse>('/public/oauth/token', body, getEtsyRequestAxiosConfig());
}
