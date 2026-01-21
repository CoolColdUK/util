import {createHash} from 'crypto';

export function sha256(buffer: string): Buffer {
  return createHash('sha256').update(buffer).digest();
}
