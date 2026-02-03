import {buildPkce} from './buildPkce';
import {extractPkce} from './extractPkce';

describe('buildPkce', () => {
  it('returns state, codeVerifier, and codeChallenge', () => {
    const result = buildPkce('myKey');
    expect(result).toHaveProperty('state');
    expect(result).toHaveProperty('codeVerifier');
    expect(result).toHaveProperty('codeChallenge');
    expect(typeof result.state).toBe('string');
    expect(typeof result.codeVerifier).toBe('string');
    expect(typeof result.codeChallenge).toBe('string');
  });

  it('produces different values on each call', () => {
    const a = buildPkce('key');
    const b = buildPkce('key');
    expect(a.codeVerifier).not.toBe(b.codeVerifier);
    expect(a.codeChallenge).not.toBe(b.codeChallenge);
    expect(a.state).not.toBe(b.state);
  });

  it('accepts optional meta (roundtrips via extractPkce)', () => {
    const result = buildPkce('key', {foo: 'bar'});
    const extracted = extractPkce('key', result.state);
    expect(extracted.meta).toEqual({foo: 'bar'});
  });
});
