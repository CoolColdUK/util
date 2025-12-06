import {createUuid} from './createUuid';

/**
 * Create a unique identifier for the object without hyphen
 * @returns
 */
export function createUuidString(length: number = 32): string {
  return createUuid().replace(/-/g, '').substring(0, length);
}
