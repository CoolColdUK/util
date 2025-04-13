import {PkceData} from './buildPkce';
import {decrypt} from './encryptDecrypt';

/**
 * Extract pkce data from state
 * @param key
 * @param state
 * @returns
 */
export function extractPkce<T extends Record<string, any>>(key: string, state: string): PkceData<T> {
  return {...JSON.parse(decrypt(key, state)), state};
}
