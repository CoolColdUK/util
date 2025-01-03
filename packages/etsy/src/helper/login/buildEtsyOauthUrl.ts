import {castArray, createPKCECodeVerifier} from '@coolcolduk/util';
import createPkceCodeChallenge from '@coolcolduk/util/dist/pkceCodeChallenge/createPkceCodeChallenge';
import {EtsyScopeEnum} from '../../enum/EtsyScopeEnum';

export default function buildEtsyOauthUrl(
  apiKey: string,
  callback: string,
  scope: EtsyScopeEnum | EtsyScopeEnum[],
  state?: string,
  codeChallenge?: string,
) {
  const verifier = createPKCECodeVerifier();
  const newState = state || verifier.state;
  const newCodeChallenge = codeChallenge || createPkceCodeChallenge(verifier.codeVerifier);
  const scopeStr = castArray(scope).join('%20');
  return `https://www.etsy.com/oauth/connect?response_type=code&redirect_uri=${callback}&scope=${scopeStr}&client_id=${apiKey}&state=${newState}&code_challenge=${newCodeChallenge}&code_challenge_method=S256`;
}
