import {encodeBase64URL} from './encodeBase64URL';
import sha256 from './sha256';

/**
 * Create code challenge from code verifier
 * @param codeVerifier
 * @returns
 */
export default function createPkceCodeChallenge(codeVerifier: string) {
  return encodeBase64URL(sha256(codeVerifier));
}
