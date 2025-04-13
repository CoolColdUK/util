import {createHash} from 'crypto';

export default function createKey(key: string) {
  return createHash('sha256').update(String(key)).digest('base64').substring(0, 32);
}
