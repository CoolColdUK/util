import {v7 as uuid} from 'uuid';

/**
 * Create a unique identifier for the object
 * - This is a wrapper around the uuid library to avoid weird import from uuid (v4)
 * @returns
 */
export function createUuid(): string {
  return uuid();
}
