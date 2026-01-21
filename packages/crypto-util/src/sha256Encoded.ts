import {BinaryToTextEncoding, createHash} from 'crypto';

export function sha256Encoded(buffer: string, encoding: BinaryToTextEncoding): string {
  return createHash('sha256').update(buffer).digest(encoding);
}
