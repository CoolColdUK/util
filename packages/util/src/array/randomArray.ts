/**
 * Randomizes the order of elements in an array by assigning random numbers to each item and sorting based on those values.
 * This provides better randomization than using Array.sort() with Math.random().
 * @param array The array to randomize
 * @returns A new array with randomized order of elements
 */
export function randomArray<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return [...array];
  }

  // Create array of objects with original item and random value
  const itemsWithRandom = array.map((item, index) => ({
    item,
    random: Math.random(),
    originalIndex: index, // Preserve original order for tie-breaking
  }));

  // Sort by random value, then by original index for tie-breaking
  itemsWithRandom.sort((a, b) => {
    if (a.random !== b.random) {
      return a.random - b.random;
    }
    return a.originalIndex - b.originalIndex;
  });

  // Extract the original items in their new random order
  return itemsWithRandom.map(({item}) => item);
}
