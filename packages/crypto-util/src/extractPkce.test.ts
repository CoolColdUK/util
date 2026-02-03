import {buildPkce} from './buildPkce';
import {extractPkce} from './extractPkce';

describe('extractPkce', () => {
  it('roundtrips with buildPkce', () => {
    const key = 'extractTestKey';
    const built = buildPkce(key, {meta: 1});
    const extracted = extractPkce(key, built.state);
    expect(extracted.codeVerifier).toBe(built.codeVerifier);
    expect(extracted.codeChallenge).toBe(built.codeChallenge);
    expect(extracted.state).toBe(built.state);
    expect(extracted.meta).toEqual({meta: 1});
  });

  it('throws when state is invalid or key is wrong', () => {
    const built = buildPkce('key');
    expect(() => extractPkce('wrongKey', built.state)).toThrow();
  });
});
