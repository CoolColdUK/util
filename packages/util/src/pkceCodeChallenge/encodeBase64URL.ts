/**
 *
 * @param buffer
 * @returns
 */
export function encodeBase64URL(buffer: Buffer) {
  return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
