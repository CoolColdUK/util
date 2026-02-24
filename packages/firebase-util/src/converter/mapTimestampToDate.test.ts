import {mapTimestampToDate, MapFirestoreTimestampToDateOptions} from './mapTimestampToDate';

describe('mapTimestampToDate', () => {
  const epochSeconds = 1609459200; // 2021-01-01 00:00:00 UTC
  const nanoseconds = 123_000_000;

  it('returns Date for object with toDate method', () => {
    const value = {
      toDate: () => new Date(epochSeconds * 1000 + nanoseconds / 1e6),
    };
    const result = mapTimestampToDate(value);
    expect(result).toBeInstanceOf(Date);
    expect((result as Date).getTime()).toBe(epochSeconds * 1000 + nanoseconds / 1e6);
  });

  it('returns Date for raw _seconds and _nanoseconds object', () => {
    const value = {_seconds: epochSeconds, _nanoseconds: nanoseconds};
    const result = mapTimestampToDate(value);
    expect(result).toBeInstanceOf(Date);
    expect((result as Date).getTime()).toBe(epochSeconds * 1000 + nanoseconds / 1e6);
  });

  it('returns original value when not timestamp-like', () => {
    expect(mapTimestampToDate('hello')).toBe('hello');
    expect(mapTimestampToDate(42)).toBe(42);
    expect(mapTimestampToDate(null)).toBe(null);
  });

  it('with skipHandleRawTimestamp skips raw shape', () => {
    const value = {_seconds: epochSeconds, _nanoseconds: nanoseconds};
    const options: MapFirestoreTimestampToDateOptions = {
      skipHandleRawTimestamp: true,
    };
    const result = mapTimestampToDate(value, options);
    expect(result).toBe(value);
  });

  it('with skipHandleTimestampWithToDateMethod skips toDate path', () => {
    const value = {
      toDate: () => new Date(epochSeconds * 1000),
    };
    const options: MapFirestoreTimestampToDateOptions = {
      skipHandleTimestampWithToDateMethod: true,
    };
    const result = mapTimestampToDate(value, options);
    expect(result).toBe(value);
  });
});
