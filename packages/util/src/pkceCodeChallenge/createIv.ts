import crypto from 'crypto';
import {encodeBase64URL} from './encodeBase64URL';

export default function createIv(): string {
  return encodeBase64URL(crypto.randomBytes(32));
}
