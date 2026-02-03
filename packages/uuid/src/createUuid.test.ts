import {createUuid} from './createUuid';

jest.mock('uuid', () => ({
  v7: jest.fn(() => 'aaaaaaaa-bbbb-7ccc-dddd-eeeeeeeeeeee'),
}));

describe('createUuid', () => {
  it('returns a string', () => {
    expect(typeof createUuid()).toBe('string');
  });

  it('returns value from uuid v7', () => {
    expect(createUuid()).toBe('aaaaaaaa-bbbb-7ccc-dddd-eeeeeeeeeeee');
  });

  it('calls uuid v7', () => {
    const {v7} = require('uuid');
    createUuid();
    expect(v7).toHaveBeenCalled();
  });
});
