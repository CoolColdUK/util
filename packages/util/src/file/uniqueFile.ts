import {isFileEqual} from './isFileEqual';

/**
 * Remove duplicated files from array
 * @param files
 * @returns
 */
export function uniqueFile(files: File[]): File[] {
  return files.filter((file, index, self) => self.findIndex((t) => isFileEqual(t, file)) === index);
}
