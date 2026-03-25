import {throwIfUndefined} from '../trythrow';

/**
 * Extract the name of a file
 * @param file File object to extract the name from
 * @returns The name of the file
 */
export function extractFileNameFromFile(file: File): string {
  return throwIfUndefined(file.name.split('.').slice(0, -1).join('.'));
}
