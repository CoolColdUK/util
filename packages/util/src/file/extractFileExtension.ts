/**
 * Extracts the extension of a filename.
 * @param filename - The filename to extract the extension from.
 * @param defaultExtension - The extension to return if no extension is found.
 * @returns The extension of the filename, or defaultExtension if no extension is found.
 */
export function extractFileExtension(filename: string, defaultExtension: string = ''): string {
  return filename.split('.').pop() ?? defaultExtension;
}
