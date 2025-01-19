/**
 *
 * @param buffer
 * @returns
 */
export function encodeBase64URL(buffer: Buffer | string) {
  const str = typeof buffer === 'string' ? buffer : buffer.toString('base64');
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
