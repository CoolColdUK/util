import {createUuid} from './createUuid';

/**
 * Create a unique identifier
 * - remove all hyphens
 * - truncate to specified length
 * @param length - default 32 characters
 * @returns
 */
export function createUuidString(length: number = 32): string {
  return createUuid().replace(/-/g, '').substring(0, length);
}
