import {mapFirestoreDocToObjectType} from './mapFirestoreDocToObjectType';

describe('mapFirestoreDocToObjectType', () => {
  it('returns object with id and data when snapshot has data', () => {
    const snapshot = {id: 'doc1', data: () => ({name: 'foo', count: 1})};
    const result = mapFirestoreDocToObjectType(snapshot);
    expect(result).toStrictEqual({id: 'doc1', name: 'foo', count: 1});
  });

  it('returns null when snapshot is null or undefined', () => {
    expect(mapFirestoreDocToObjectType(null)).toBeNull();
    expect(mapFirestoreDocToObjectType(undefined)).toBeNull();
  });

  it('returns null when data() returns undefined', () => {
    const snapshot = {id: 'doc1', data: () => undefined};
    expect(mapFirestoreDocToObjectType(snapshot)).toBeNull();
  });
});
