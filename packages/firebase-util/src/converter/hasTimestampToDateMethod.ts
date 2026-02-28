export function hasTimestampToDateMethod(value: unknown): value is {toDate: () => Date} {
  return (
    typeof value === 'object' &&
    value !== null &&
    'toDate' in value &&
    typeof (value as {toDate: unknown}).toDate === 'function'
  );
}
