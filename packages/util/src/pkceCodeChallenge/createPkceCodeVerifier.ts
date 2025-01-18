import {randomBytes} from 'crypto';
import {encodeBase64URL} from './encodeBase64URL';

/**
 * Originate from Etsy login
 * @returns
 */
export default function createPKCECodeVerifier() {
  // We’ll use the verifier to generate the challenge.
  // The verifier needs to be saved for a future step in the OAuth flow.
  const codeVerifier = encodeBase64URL(randomBytes(32));
  // With these functions, we can generate
  // the values needed for our OAuth authorization grant.
  // const state = Math.random().toString(36).substring(7);
  return codeVerifier;
}
