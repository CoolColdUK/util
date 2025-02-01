import {retry} from '@coolcolduk/util';
import {refreshEtsyAccessToken} from '../../request/login/refreshEtsyAccessToken';

export async function withEtsyRefreshToken<T>(
  etsyApiKey: string,
  accessToken: string,
  refreshToken: string,
  fn: (accessToken: string) => Promise<T>,
): Promise<{accessToken: string; result: T}> {
  return retry(
    async (i) => {
      const refreshedToken = i === 1 ? (await refreshEtsyAccessToken(etsyApiKey, refreshToken)).data : undefined;
      const finalAccessToken = refreshedToken?.access_token || accessToken;

      return {accessToken: finalAccessToken, result: await fn(finalAccessToken)};
    },
    {
      numberOfTries: 2,
    },
  );
}
