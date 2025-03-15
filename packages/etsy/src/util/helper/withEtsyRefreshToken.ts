import {retry} from '@coolcolduk/util';
import {refreshEtsyAccessToken} from '../../request/login/refreshEtsyAccessToken';

export interface WithEtsyRefreshTokenResult<T> {
  accessToken: string;
  refreshToken: string;
  result: T;
}

/**
 * run the required function twice and run refresh access token when it failed the first time
 * @param etsyApiKey
 * @param accessToken
 * @param refreshToken
 * @param fn
 * @returns
 */
export async function withEtsyRefreshToken<T>(
  etsyApiKey: string,
  accessToken: string,
  refreshToken: string,
  fn: (accessToken: string) => Promise<T>,
): Promise<WithEtsyRefreshTokenResult<T>> {
  return retry(
    async (i) => {
      const refreshedToken = i === 1 ? (await refreshEtsyAccessToken(etsyApiKey, refreshToken)).data : undefined;
      const finalAccessToken = refreshedToken?.access_token || accessToken;
      const finalRefreshToken = refreshedToken?.refresh_token || refreshToken;

      return {accessToken: finalAccessToken, refreshToken: finalRefreshToken, result: await fn(finalAccessToken)};
    },
    {
      numberOfTries: 2,
    },
  );
}
