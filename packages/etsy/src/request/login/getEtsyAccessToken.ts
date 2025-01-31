import axios from 'axios';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {EtsyToken} from '../../interfaces/EtsyToken';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Post to etsy for access token for first login
 * @returns
 */
export function getEtsyAccessToken(
  apiKey: string,
  redirectUri: string,
  authCode: string,
  codeVerifier: string,
): EtsyResponse<EtsyToken> {
  const body = JSON.stringify({
    grant_type: 'authorization_code',
    client_id: apiKey,
    redirect_uri: redirectUri,
    code: authCode,
    code_verifier: codeVerifier,
  });

  return axios.post<EtsyToken>('/public/oauth/token', body, getEtsyRequestAxiosConfig());
}
