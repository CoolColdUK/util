import {generateTestEach} from '../testHelper/generateTestEach';
import {hasArrayDuplicates} from './hasArrayDuplicates';

interface ITestData {
  arr: any[];
  result: boolean;
}

describe('hasArrayDuplicates', () => {
  const testCases: Record<string, ITestData> = {
    'Should return an empty array when input is empty': {
      arr: [],
      result: false,
    },

    'Should return an empty array when all elements are unique': {
      arr: [1, 2, 3, 4, 5],
      result: false,
    },

    'Should return duplicated values only, without repetition': {
      arr: [1, 2, 3, 2, 4, 1, 5, 6, 3],
      result: true,
    },

    'Should work with string values': {
      arr: ['apple', 'banana', 'apple', 'cherry', 'banana', 'date'],
      result: true,
    },

    'Should work with mixed data types': {
      arr: [1, 'apple', 2, 'banana', 'apple', 1, 3],
      result: true,
    },

    'Should work with boolean values': {
      arr: [true, false, true, true, false],
      result: true,
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {arr, result} = input as ITestData;
    expect(hasArrayDuplicates(arr)).toBe(result);
  });
});
