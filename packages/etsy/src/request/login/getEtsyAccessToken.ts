import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {EtsyToken} from '../../interfaces/EtsyToken';
import {getEtsyAxios} from '../../util/getEtsyAxios';

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

  return getEtsyAxios().post<EtsyToken>('/public/oauth/token', body);
}
