import {PkceData} from '@coolcolduk/crypto-util';
import {buildUrlQuery, castArray} from '@coolcolduk/util';
import {EtsyScopeEnum} from '../enum/EtsyScopeEnum';

export function buildEtsyOauthUrl(
  apiKey: string,
  callback: string,
  scope: EtsyScopeEnum | EtsyScopeEnum[],
  pkceData: PkceData<any>,
) {
  const scopeStr = castArray(scope).join('%20');
  const query = {
    response_type: 'code',
    redirect_uri: callback,
    scope: scopeStr,
    client_id: apiKey,
    state: pkceData.state,
    code_challenge: pkceData.codeChallenge,
    code_challenge_method: 'S256',
  };

  return buildUrlQuery('https://www.etsy.com/oauth/connect', query);
}
