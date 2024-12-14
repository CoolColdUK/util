export function removeDuplicateCaseInsensitive(array: string[]): string[] {
  const seen = new Set<string>();
  return array.filter((item) => {
    const lowerCaseItem = item.toLowerCase();
    if (!seen.has(lowerCaseItem)) {
      seen.add(lowerCaseItem);
      return true;
    }
    return false;
  });
}
