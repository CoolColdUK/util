import {createKey} from './createKey';

describe('createKey', () => {
  it('returns deterministic base64 substring of sha256 for given key', () => {
    const a = createKey('secret', 32);
    const b = createKey('secret', 32);
    expect(a).toBe(b);
    expect(a.length).toBe(32);
  });

  it('uses default length 32 when not provided', () => {
    expect(createKey('x').length).toBe(32);
  });

  it('respects custom length (base64 sha256 is 44 chars, so max 44)', () => {
    expect(createKey('key', 8).length).toBe(8);
    expect(createKey('key', 44).length).toBe(44);
  });

  it('produces different output for different keys', () => {
    expect(createKey('a', 32)).not.toBe(createKey('b', 32));
  });
});
