/**
 * run parseFloat safely and return undefined if error or NaN
 * @param value
 * @returns
 */
export function safeParseFloat(value: string): number | undefined {
  try {
    const rtn = parseFloat(value);
    if (Number.isNaN(rtn)) return undefined;
    return rtn;
  } catch {
    // it shouldn't happen but just in case
    return undefined;
  }
}
