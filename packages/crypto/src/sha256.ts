import {createHash} from 'crypto';

export default function sha256(buffer: string): Buffer {
  return createHash('sha256').update(buffer).digest();
}
