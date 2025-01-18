import {createHash} from 'crypto';
import {encodeBase64URL} from './encodeBase64URL';

const sha256 = (buffer: string) => createHash('sha256').update(buffer).digest();

/**
 * Create code challenge from code verifier
 * @param codeVerifier
 * @returns
 */
export default function createPkceCodeChallenge(codeVerifier: string) {
  return encodeBase64URL(sha256(codeVerifier));
}
