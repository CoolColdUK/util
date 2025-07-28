/**
 * Maps over an array with a concurrency limit, processing items in parallel up to the specified limit
 * @param items Array of items to process
 * @param concurrency Maximum number of concurrent operations
 * @param mapper Async function to apply to each item
 * @returns Promise that resolves to an array of mapped results
 */
export async function mapPromiseLimit<T, R>(
  items: T[],
  concurrency: number,
  mapper: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let currentIndex = 0;

  // Handle edge cases: 0 or negative concurrency should be treated as 1 (sequential)
  const effectiveConcurrency = Math.max(1, concurrency);

  const processNext = async (): Promise<void> => {
    if (currentIndex >= items.length) return;

    const index = currentIndex++;
    const item = items[index]!; // Non-null assertion since we check bounds

    try {
      const result = await mapper(item, index);
      results[index] = result;
    } catch (error) {
      // Re-throw the error to be handled by the caller
      throw error;
    }
  };

  const worker = async (): Promise<void> => {
    while (currentIndex < items.length) {
      await processNext();
    }
  };

  // Start workers up to the concurrency limit
  const workers = Array.from({length: Math.min(effectiveConcurrency, items.length)}, () => worker());

  // Wait for all workers to complete
  await Promise.all(workers);

  return results;
}
