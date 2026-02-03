import {throwIfGqlError} from './throwIfGqlError';

describe('throwIfGqlError', () => {
  it('returns data when no errors', () => {
    const data = {user: {id: '1'}};
    const result = throwIfGqlError({data});
    expect(result).toEqual(data);
  });

  it('throws when errors present', () => {
    expect(() =>
      throwIfGqlError({
        data: undefined,
        errors: [{message: 'Something went wrong'}],
      }),
    ).toThrow('Something went wrong');
  });

  it('throws when data is null', () => {
    expect(() => throwIfGqlError({data: null})).toThrow('No data returned from GQL');
  });

  it('throws when data is undefined', () => {
    expect(() => throwIfGqlError({})).toThrow('No data returned from GQL');
  });
});
