import {mapFirestoreTimestampToDateForObjectValue} from './mapFirestoreTimestampToDateForObjectValue';

describe('mapFirestoreTimestampToDateForObjectValue', () => {
  it('recursively converts raw timestamp shapes to Date', () => {
    const input = {
      a: 1,
      ts: {_seconds: 1609459200, _nanoseconds: 0},
      nested: {
        ts2: {_seconds: 1609545600, _nanoseconds: 123_000_000},
      },
    };
    const result = mapFirestoreTimestampToDateForObjectValue(input);
    expect(result.a).toBe(1);
    expect(result.ts).toBeInstanceOf(Date);
    expect((result.ts as Date).getTime()).toBe(1609459200 * 1000);
    expect(result.nested.ts2).toBeInstanceOf(Date);
    expect((result.nested.ts2 as Date).getTime()).toBe(1609545600 * 1000 + 123_000_000 / 1e6);
  });

  it('converts objects with both toDate and raw _seconds/_nanoseconds via raw path', () => {
    const input = {
      ts: {toDate: () => new Date(1609459200000), _seconds: 1609459200, _nanoseconds: 0},
    };
    const result = mapFirestoreTimestampToDateForObjectValue(input);
    expect(result.ts).toBeInstanceOf(Date);
    expect((result.ts as Date).getTime()).toBe(1609459200000);
  });

  it('leaves non-timestamp values unchanged', () => {
    const input = {x: 'hello', n: 42, arr: [1, 2]};
    const result = mapFirestoreTimestampToDateForObjectValue(input);
    expect(result).toStrictEqual(input);
  });
});
