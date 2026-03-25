import {throwIfUndefined} from '../trythrow';

/**
 * Extract the extension of a file
 * @param file File object to extract the extension from
 * @returns The extension of the file
 */
export function extractFileExtensionFromFile(file: File): string {
  return throwIfUndefined(file.name.split('.').pop());
}
