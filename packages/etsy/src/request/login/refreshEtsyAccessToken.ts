import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {EtsyToken} from '../../interfaces/EtsyToken';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Post to etsy to refresh token
 * @returns
 */
export function refreshEtsyAccessToken(apiKey: string, refreshToken: string): EtsyResponse<EtsyToken> {
  const body = JSON.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: apiKey,
  });

  return getEtsyAxios().post<EtsyToken>('/public/oauth/token', body);
}
