import createPkceCodeChallenge from './createPkceCodeChallenge';
import createPKCECodeVerifier from './createPkceCodeVerifier';
import createPkceState from './createPkceState';

export interface PkceData<T extends Record<string, any>> {
  state: string;
  codeVerifier: string;
  codeChallenge: string;
  meta?: T;
}

/**
 * build pkce data
 * @returns
 */
export function buildPkce<T extends Record<string, any>>(key: string, meta?: T): PkceData<T> {
  const codeVerifier = createPKCECodeVerifier();
  const codeChallenge = createPkceCodeChallenge(codeVerifier);

  const state = createPkceState(key, JSON.stringify({codeVerifier, codeChallenge, meta}));
  return {codeVerifier, codeChallenge, state};
}
