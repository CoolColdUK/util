import {generateTestEach} from '../testHelper/generateTestEach';
import {chunkArray} from './chunkArray';

interface ITestData {
  array: any[];
  size: number;
  expected: any[][];
}

describe('chunkArray', () => {
  const testCases: Record<string, ITestData> = {
    'Should chunk array with size 2': {
      array: [1, 2, 3, 4, 5],
      size: 2,
      expected: [[1, 2], [3, 4], [5]],
    },

    'Should chunk array with size 3': {
      array: [1, 2, 3, 4, 5, 6],
      size: 3,
      expected: [
        [1, 2, 3],
        [4, 5, 6],
      ],
    },

    'Should chunk array with size 1 (default)': {
      array: [1, 2, 3],
      size: 1,
      expected: [[1], [2], [3]],
    },

    'Should chunk array with size larger than array': {
      array: [1, 2, 3],
      size: 5,
      expected: [[1, 2, 3]],
    },

    'Should chunk array with size equal to array length': {
      array: [1, 2, 3],
      size: 3,
      expected: [[1, 2, 3]],
    },

    'Should handle empty array': {
      array: [],
      size: 2,
      expected: [],
    },

    'Should handle size 0': {
      array: [1, 2, 3],
      size: 0,
      expected: [],
    },

    'Should handle negative size': {
      array: [1, 2, 3],
      size: -1,
      expected: [],
    },

    'Should handle size larger than array length': {
      array: [1, 2],
      size: 10,
      expected: [[1, 2]],
    },

    'Should handle single element array': {
      array: [42],
      size: 2,
      expected: [[42]],
    },

    'Should handle string array': {
      array: ['a', 'b', 'c', 'd'],
      size: 2,
      expected: [
        ['a', 'b'],
        ['c', 'd'],
      ],
    },

    'Should handle mixed type array': {
      array: [1, 'two', true, null, undefined],
      size: 2,
      expected: [[1, 'two'], [true, null], [undefined]],
    },

    'Should handle object array': {
      array: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
      size: 2,
      expected: [
        [{id: 1}, {id: 2}],
        [{id: 3}, {id: 4}],
      ],
    },

    'Should handle nested array': {
      array: [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
      size: 2,
      expected: [
        [
          [1, 2],
          [3, 4],
        ],
        [
          [5, 6],
          [7, 8],
        ],
      ],
    },

    'Should handle array with undefined values': {
      array: [1, undefined, 3, undefined, 5],
      size: 2,
      expected: [[1, undefined], [3, undefined], [5]],
    },

    'Should handle array with null values': {
      array: [1, null, 3, null, 5],
      size: 2,
      expected: [[1, null], [3, null], [5]],
    },

    'Should handle array with boolean values': {
      array: [true, false, true, false, true],
      size: 3,
      expected: [
        [true, false, true],
        [false, true],
      ],
    },

    'Should handle large array with small chunk size': {
      array: Array.from({length: 10}, (_, i) => i + 1),
      size: 2,
      expected: [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10],
      ],
    },

    'Should handle large array with large chunk size': {
      array: Array.from({length: 10}, (_, i) => i + 1),
      size: 8,
      expected: [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [9, 10],
      ],
    },

    'Should handle array with duplicate values': {
      array: [1, 1, 2, 2, 3, 3],
      size: 2,
      expected: [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
    },

    'Should handle array with NaN values': {
      array: [1, NaN, 3, NaN, 5],
      size: 2,
      expected: [[1, NaN], [3, NaN], [5]],
    },

    'Should handle array with Infinity values': {
      array: [1, Infinity, 3, -Infinity, 5],
      size: 2,
      expected: [[1, Infinity], [3, -Infinity], [5]],
    },

    'Should handle array with zero values': {
      array: [0, 1, 0, 2, 0],
      size: 2,
      expected: [[0, 1], [0, 2], [0]],
    },

    'Should handle array with decimal numbers': {
      array: [1.5, 2.7, 3.1, 4.9, 5.2],
      size: 2,
      expected: [[1.5, 2.7], [3.1, 4.9], [5.2]],
    },

    'Should handle array with special characters': {
      array: ['!', '@', '#', '$', '%'],
      size: 2,
      expected: [['!', '@'], ['#', '$'], ['%']],
    },

    'Should handle array with emoji': {
      array: ['😀', '😃', '😄', '😁'],
      size: 2,
      expected: [
        ['😀', '😃'],
        ['😄', '😁'],
      ],
    },

    'Should handle array with empty strings': {
      array: ['', 'hello', '', 'world', ''],
      size: 2,
      expected: [['', 'hello'], ['', 'world'], ['']],
    },

    'Should handle array with whitespace strings': {
      array: [' ', '  ', '   ', '    '],
      size: 2,
      expected: [
        [' ', '  '],
        ['   ', '    '],
      ],
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {array, size, expected} = input as ITestData;
    const result = chunkArray(array, size);
    expect(result).toEqual(expected);
  });
});
