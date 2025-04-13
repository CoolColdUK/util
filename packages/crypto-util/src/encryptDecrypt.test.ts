import {decrypt, encrypt} from './encryptDecrypt';

const key1 = 'this is a key';
const key2 = 'this is just the wrong key';

describe('Encryption and Decryption', () => {
  it('should encrypt and decrypt the text correctly', () => {
    const plaintext = 'This is a secret message!';
    const encrypted = encrypt(key1, plaintext);
    const decrypted = decrypt(key1, encrypted);

    expect(decrypted).toBe(plaintext);
  });

  it('should produce different encryption outputs for the same plaintext', () => {
    const plaintext = 'This is a secret message!';
    const encrypted1 = encrypt(key1, plaintext);
    const encrypted2 = encrypt(key1, plaintext);

    expect(encrypted1).not.toBe(encrypted2);
  });

  it('should throw an error for tampered encrypted text', () => {
    const plaintext = 'This is a secret message!';
    const encrypted = encrypt(key1, plaintext);

    // Tamper with the authentication tag (middle part of the encrypted text)
    const parts = encrypted.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted text format');
    }
    parts[1] = (parts[1] as string).replace(/./, 'A'); // Modify the auth tag
    const tampered = parts.join(':');

    expect(() => decrypt(key1, tampered)).toThrow('Unsupported state or unable to authenticate data');
  });

  it('should throw an error for invalid format', () => {
    const invalidEncryptedText = 'InvalidFormatText';

    expect(() => decrypt(key1, invalidEncryptedText)).toThrow('Invalid encrypted text format');
  });

  it('should throw an error for using a wrong key', () => {
    const plaintext = 'This is a secret message!';
    const encrypted = encrypt(key1, plaintext);

    expect(() => decrypt(key2, encrypted)).toThrow('Unsupported state or unable to authenticate data');
  });
});
