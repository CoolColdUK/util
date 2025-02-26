/**
 * Compare two files to see if they are equal.
 * @param file1
 * @param file2
 * @returns
 */
export default function isFileEqual(file1: File, file2: File): boolean {
  return (
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified
  );
}
