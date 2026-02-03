import {validateGqlNoError} from './validateGqlNoError';

describe('validateGqlNoError', () => {
  it('does not throw when no errors', () => {
    expect(() => validateGqlNoError({data: {}})).not.toThrow();
    expect(() => validateGqlNoError({})).not.toThrow();
  });

  it('throws when errors present', () => {
    expect(() =>
      validateGqlNoError({
        errors: [{message: 'Validation failed'}],
      }),
    ).toThrow('Validation failed');
  });

  it('throws with first error message', () => {
    expect(() =>
      validateGqlNoError({
        errors: [{message: 'First'}, {message: 'Second'}],
      }),
    ).toThrow('First');
  });
});
