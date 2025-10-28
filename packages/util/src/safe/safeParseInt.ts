/**
 * run parseInt safely and return undefined if error or NaN
 * @param value
 * @returns
 */
export function safeParseInt(value: string): number | undefined {
  try {
    const rtn = parseInt(value, 10);
    if (Number.isNaN(rtn)) return undefined;
    return rtn;
  } catch (e) {
    // it shouldn't happen but just in case
    return undefined;
  }
}
