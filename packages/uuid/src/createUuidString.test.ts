import {createUuidString} from './createUuidString';

jest.mock('./createUuid', () => ({
  createUuid: () => 'aaaaaaaa-bbbb-7ccc-dddd-eeeeeeeeeeee',
}));

describe('createUuidString', () => {
  it('returns string without hyphens of default length 32', () => {
    const id = createUuidString();
    expect(id).not.toContain('-');
    expect(id.length).toBe(32);
    expect(id).toMatch(/^[0-9a-f]{32}$/i);
  });

  it('respects custom length', () => {
    expect(createUuidString(8).length).toBe(8);
    expect(createUuidString(16).length).toBe(16);
  });

  it('strips hyphens from uuid', () => {
    expect(createUuidString(36)).toBe('aaaaaaaabbbb7cccddddeeeeeeeeeeee');
  });
});
