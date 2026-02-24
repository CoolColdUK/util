import {mapFirestoreDocsToObjectTypeArray} from './mapFirestoreDocsToObjectTypeArray';

describe('mapFirestoreDocsToObjectTypeArray', () => {
  it('maps docs to array of objects with id', () => {
    const snapshot = {
      docs: [
        {id: 'a', data: () => ({x: 1})},
        {id: 'b', data: () => ({x: 2})},
      ],
      size: 2,
    };
    const result = mapFirestoreDocsToObjectTypeArray(snapshot);
    expect(result).toStrictEqual([
      {id: 'a', x: 1},
      {id: 'b', x: 2},
    ]);
  });

  it('returns empty array when snapshot is null or undefined', () => {
    expect(mapFirestoreDocsToObjectTypeArray(null)).toStrictEqual([]);
    expect(mapFirestoreDocsToObjectTypeArray(undefined)).toStrictEqual([]);
  });

  it('filters out docs with no data', () => {
    const snapshot = {
      docs: [
        {id: 'a', data: () => ({x: 1})},
        {id: 'b', data: () => undefined},
      ],
      size: 2,
    };
    const result = mapFirestoreDocsToObjectTypeArray(snapshot);
    expect(result).toStrictEqual([{id: 'a', x: 1}]);
  });
});
