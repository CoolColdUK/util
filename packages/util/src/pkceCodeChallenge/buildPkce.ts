import createPkceCodeChallenge from './createPkceCodeChallenge';
import createPKCECodeVerifier from './createPkceCodeVerifier';
import createPkceState from './createPkceState';

export interface PkceData {
  state: string;
  codeVerifier: string;
  codeChallenge: string;
}

/**
 * build pkce data
 * @returns
 */
export function buildPkce(key: string): PkceData {
  const codeVerifier = createPKCECodeVerifier();
  const codeChallenge = createPkceCodeChallenge(codeVerifier);

  const state = createPkceState(key, JSON.stringify({codeVerifier, codeChallenge}));
  return {codeVerifier, codeChallenge, state};
}
