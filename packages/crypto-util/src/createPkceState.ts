import {encrypt} from './encryptDecrypt';

export default function createPkceState(key: string, dataToEncrypt?: string) {
  const state = Math.random().toString(36).substring(7);

  return dataToEncrypt ? encrypt(key, dataToEncrypt) : state;
}
