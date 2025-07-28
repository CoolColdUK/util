/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * @param array The array to process
 * @param size The length of each chunk
 * @returns Returns the new array of chunks
 */
export function chunkArray<T>(array: T[], size: number = 1): T[][] {
  if (size < 1) {
    return [];
  }

  const result: T[][] = [];
  const length = array.length;

  // Calculate number of chunks needed
  const chunkCount = Math.ceil(length / size);

  Array.from({length: chunkCount}, (_, index) => {
    const start = index * size;
    const end = start + size;
    result.push(array.slice(start, end));
  });

  return result;
}
