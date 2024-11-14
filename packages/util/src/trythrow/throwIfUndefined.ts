export function throwIfUndefined<T>(val?: T, errorMessage = 'Value not available'): T {
  if (val === undefined) {
    throw new Error(errorMessage);
  }
  return val;
}
