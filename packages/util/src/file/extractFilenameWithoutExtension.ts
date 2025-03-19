/**
 * extract filename assuming the name is a file name with extension
 * @param name
 * @returns
 */
export function extractFilenameWithoutExtension(name: string): string {
  const lastDotIndex = name.lastIndexOf('.');
  return lastDotIndex === -1 ? name : name.substring(0, lastDotIndex);
}
