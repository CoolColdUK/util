import {combineArraysString} from './combineArraysString';

interface TestCase {
  firstArray: string[];
  restArrays: string[][];
  delimiter: string;
  result: string[];
}

describe('combineArraysString', () => {
  const testCases: Record<string, TestCase> = {
    'Should combine two arrays': {
      firstArray: ['A', 'B'],
      restArrays: [['1', '2']],
      delimiter: '',
      result: ['A1', 'A2', 'B1', 'B2'],
    },
    'Should combine three arrays with a delimiter': {
      firstArray: ['A', 'B'],
      restArrays: [
        ['1', '2'],
        ['X', 'Y'],
      ],
      delimiter: '-',
      result: ['A-1-X', 'A-1-Y', 'A-2-X', 'A-2-Y', 'B-1-X', 'B-1-Y', 'B-2-X', 'B-2-Y'],
    },
    'Should handle empty arrays': {
      firstArray: ['A', 'B'],
      restArrays: [[]],
      delimiter: '',
      result: ['A', 'B'],
    },
    'Should handle no arrays': {
      firstArray: [],
      restArrays: [],
      delimiter: '',
      result: [],
    },
    'Should handle single array input': {
      firstArray: ['A', 'B', 'C'],
      restArrays: [],
      delimiter: '',
      result: ['A', 'B', 'C'],
    },
    'Should handle empty first array': {
      firstArray: [],
      restArrays: [['X', 'Y']],
      delimiter: '',
      result: [],
    },
    'Should handle nested empty arrays': {
      firstArray: ['A'],
      restArrays: [[], ['X', 'Y']],
      delimiter: '-',
      result: ['A'],
    },
  };

  it.each(Object.entries(testCases))('%s', (_title, testcase) => {
    const {firstArray, restArrays, delimiter, result} = testcase;
    expect(combineArraysString(delimiter, firstArray, ...restArrays)).toStrictEqual(result);
  });
});
