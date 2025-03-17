export function throwIfUndefined<T, E extends Error>(
  val?: T,
  errorMessage: string | (() => E) = 'Value not available',
): T {
  if (val === undefined) {
    if (typeof errorMessage === 'string') {
      throw new Error(errorMessage);
    } else {
      throw errorMessage();
    }
  }
  return val;
}
