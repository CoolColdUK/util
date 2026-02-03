import {sha256} from './sha256';

describe('sha256', () => {
  it('returns a Buffer of length 32', () => {
    const result = sha256('hello');
    expect(Buffer.isBuffer(result)).toBe(true);
    expect(result.length).toBe(32);
  });

  it('is deterministic', () => {
    expect(sha256('same').equals(sha256('same'))).toBe(true);
  });

  it('produces different digest for different input', () => {
    expect(sha256('a').equals(sha256('b'))).toBe(false);
  });
});
