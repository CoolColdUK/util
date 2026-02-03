import {sha256Encoded} from './sha256Encoded';

describe('sha256Encoded', () => {
  it('returns base64 string for base64 encoding', () => {
    const result = sha256Encoded('hello', 'base64');
    expect(typeof result).toBe('string');
    expect(result).toMatch(/^[A-Za-z0-9+/]+=*$/);
  });

  it('returns hex string for hex encoding', () => {
    const result = sha256Encoded('hello', 'hex');
    expect(typeof result).toBe('string');
    expect(result).toMatch(/^[0-9a-f]{64}$/);
  });

  it('is deterministic', () => {
    expect(sha256Encoded('same', 'hex')).toBe(sha256Encoded('same', 'hex'));
  });
});
