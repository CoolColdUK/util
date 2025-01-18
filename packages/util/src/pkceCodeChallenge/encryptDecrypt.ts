import crypto from 'crypto';
import createIv from './createIv';
import createKey from './createKey';

const ALGORITHM = 'aes-256-gcm'; // Encryption algorithm

/**
 * Encrypts a given text using AES-256-GCM.
 * @param key any text which will be formatted to correct length
 * @param text The text to encrypt.
 * @returns The encrypted text in base64 format, along with the IV and authentication tag.
 */
export function encrypt(key: string, text: string): string {
  const iv = createIv();
  const cipher = crypto.createCipheriv(ALGORITHM, createKey(key), iv);

  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  // const authTag = cipher.getAuthTag().toString('base64'); // Get authentication tag

  // Combine IV, authTag, and encrypted text
  return `${iv}:${encrypted}`;
}

/**
 * Decrypts a given encrypted text using AES-256-GCM.
 * @param encryptedText The encrypted text in base64 format, along with the IV and authentication tag.
 * @returns The decrypted plain text.
 */
export function decrypt(key: string, encryptedText: string): string {
  const [ivBase64, encrypted] = encryptedText.split(':');
  if (!ivBase64 || !encrypted) {
    throw new Error('Invalid encrypted text format');
  }

  // const authTag = Buffer.from(authTagBase64, 'base64'); // Decode authentication tag

  const decipher = crypto.createDecipheriv(ALGORITHM, createKey(key), ivBase64);
  // decipher.setAuthTag(toArrayBuffer(authTag)); // Set authentication tag

  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
