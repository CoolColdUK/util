import createPkceCodeChallenge from './createPkceCodeChallenge';
import {createPKCECodeVerifier} from './createPkceCodeVerifier';

export interface PkceData {
  state: string;
  codeVerifier: string;
  codeChallenge: string;
}

/**
 * build pkce data
 * @returns
 */
export function buildPkce(): PkceData {
  const verifier = createPKCECodeVerifier();
  return {...verifier, codeChallenge: createPkceCodeChallenge(verifier.codeVerifier)};
}
