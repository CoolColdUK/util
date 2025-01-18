import {PkceData} from './buildPkce';
import {decrypt} from './encryptDecrypt';

/**
 * Extract pkce data from state
 * @param key
 * @param state
 * @returns
 */
export function extractPkce(key: string, state: string): PkceData {
  return {...JSON.parse(decrypt(key, state)), state};
}
