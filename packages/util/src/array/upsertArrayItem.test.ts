import {upsertArrayItem} from './upsertArrayItem';

interface TestCase<T> {
  targetArray: T[];
  replaceItem: T;
  matchFn: (item: T, index: number, array: T[]) => boolean;
  expected: T[];
}

describe('upsertArrayItem', () => {
  const testCases: Record<string, TestCase<any>> = {
    'Should replace a single matching item': {
      targetArray: [1, 2, 3, 4, 5],
      replaceItem: 10,
      matchFn: (item) => item === 3,
      expected: [1, 2, 10, 4, 5],
    },

    'Should replace multiple matching items': {
      targetArray: [1, 2, 3, 2, 5, 2],
      replaceItem: 10,
      matchFn: (item) => item === 2,
      expected: [1, 10, 3, 10, 5, 10],
    },

    'Should append item when no match is found': {
      targetArray: [1, 2, 3, 4, 5],
      replaceItem: 10,
      matchFn: (item) => item === 99,
      expected: [1, 2, 3, 4, 5, 10],
    },

    'Should handle empty array by appending': {
      targetArray: [],
      replaceItem: 10,
      matchFn: (item) => item === 3,
      expected: [10],
    },

    'Should replace item using index in match function': {
      targetArray: [1, 2, 3, 4, 5],
      replaceItem: 10,
      matchFn: (_item, index) => index === 2,
      expected: [1, 2, 10, 4, 5],
    },

    'Should replace item using array reference in match function': {
      targetArray: [1, 2, 3],
      replaceItem: 10,
      matchFn: (item, index, array) => array[index] === item && item === 2,
      expected: [1, 10, 3],
    },

    'Should handle object arrays': {
      targetArray: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ],
      replaceItem: {id: 2, name: 'Robert'},
      matchFn: (item) => item.id === 2,
      expected: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Robert'},
        {id: 3, name: 'Charlie'},
      ],
    },

    'Should append object when no match is found': {
      targetArray: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
      ],
      replaceItem: {id: 3, name: 'Charlie'},
      matchFn: (item) => item.id === 99,
      expected: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ],
    },

    'Should handle string arrays': {
      targetArray: ['apple', 'banana', 'cherry'],
      replaceItem: 'orange',
      matchFn: (item) => item === 'banana',
      expected: ['apple', 'orange', 'cherry'],
    },

    'Should append string when no match is found': {
      targetArray: ['apple', 'banana', 'cherry'],
      replaceItem: 'orange',
      matchFn: (item) => item === 'grape',
      expected: ['apple', 'banana', 'cherry', 'orange'],
    },

    'Should handle array with duplicate values - replace all': {
      targetArray: [1, 1, 1, 2, 3],
      replaceItem: 10,
      matchFn: (item) => item === 1,
      expected: [10, 10, 10, 2, 3],
    },

    'Should handle array with null values': {
      targetArray: [1, null, 3, null, 5],
      replaceItem: 10,
      matchFn: (item) => item === null,
      expected: [1, 10, 3, 10, 5],
    },

    'Should handle array with undefined values': {
      targetArray: [1, undefined, 3, undefined, 5],
      replaceItem: 10,
      matchFn: (item) => item === undefined,
      expected: [1, 10, 3, 10, 5],
    },

    'Should replace first item': {
      targetArray: [1, 2, 3, 4, 5],
      replaceItem: 10,
      matchFn: (item) => item === 1,
      expected: [10, 2, 3, 4, 5],
    },

    'Should replace last item': {
      targetArray: [1, 2, 3, 4, 5],
      replaceItem: 10,
      matchFn: (item) => item === 5,
      expected: [1, 2, 3, 4, 10],
    },

    'Should handle complex match condition': {
      targetArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      replaceItem: 0,
      matchFn: (item) => item > 5,
      expected: [1, 2, 3, 4, 5, 0, 0, 0, 0, 0],
    },
  };

  it.each(Object.entries(testCases))('%s', (_title, testcase) => {
    const {targetArray, replaceItem, matchFn, expected} = testcase;
    const result = upsertArrayItem(targetArray, replaceItem, matchFn);
    expect(result).toStrictEqual(expected);
  });

  it('Should not mutate the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const originalArrayCopy = [...originalArray];
    upsertArrayItem(originalArray, 10, (item) => item === 3);
    expect(originalArray).toStrictEqual(originalArrayCopy);
  });

  it('Should return a new array instance', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const result = upsertArrayItem(originalArray, 10, (item) => item === 3);
    expect(result).not.toBe(originalArray);
  });
});
