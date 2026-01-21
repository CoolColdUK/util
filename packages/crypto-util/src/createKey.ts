import {sha256Encoded} from './sha256Encoded';

/**
 * Create a sha256 hash of a given key and return it as a base64 string of specified length.
 * @param key
 * @returns
 */
export function createKey(key: string, length: number = 32): string {
  return sha256Encoded(String(key), 'base64').substring(0, length);
}
