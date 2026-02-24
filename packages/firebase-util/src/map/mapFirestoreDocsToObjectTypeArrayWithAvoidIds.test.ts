import {mapFirestoreDocsToObjectTypeArrayWithAvoidIds} from './mapFirestoreDocsToObjectTypeArrayWithAvoidIds';

describe('mapFirestoreDocsToObjectTypeArrayWithAvoidIds', () => {
  it('excludes avoid ids and respects limit', async () => {
    const snapshot = {
      docs: [
        {id: 'a', data: () => ({x: 1})},
        {id: 'b', data: () => ({x: 2})},
        {id: 'c', data: () => ({x: 3})},
      ],
      size: 3,
    };
    const result = await mapFirestoreDocsToObjectTypeArrayWithAvoidIds(snapshot, ['b'], 2);
    expect(result).toStrictEqual([
      {id: 'a', x: 1},
      {id: 'c', x: 3},
    ]);
  });

  it('returns full array when no avoid ids', async () => {
    const snapshot = {
      docs: [{id: 'a', data: () => ({x: 1})}],
      size: 1,
    };
    const result = await mapFirestoreDocsToObjectTypeArrayWithAvoidIds(snapshot, undefined);
    expect(result).toStrictEqual([{id: 'a', x: 1}]);
  });

  it('returns empty array when snapshot is null', async () => {
    const result = await mapFirestoreDocsToObjectTypeArrayWithAvoidIds(null);
    expect(result).toStrictEqual([]);
  });
});
