import {createHash} from 'crypto';

/**
 * Create a sha256 hash of a given key and return it as a base64 string of specified length.
 * @param key
 * @returns
 */
export function createKey(key: string, length: number = 32): string {
  return createHash('sha256').update(String(key)).digest('base64').substring(0, length);
}
