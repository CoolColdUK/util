import {generateTestEach} from '../testHelper/generateTestEach';
import {filterArrayDuplicates} from './filterArrayDuplicates';

interface ITestData {
  arr: any[];
  result: any[];
}

describe('filterArrayDuplicates', () => {
  const testCases: Record<string, ITestData> = {
    'Should return an empty array when input is empty': {
      arr: [],
      result: [],
    },

    'Should return an empty array when all elements are unique': {
      arr: [1, 2, 3, 4, 5],
      result: [],
    },

    'Should return duplicated values only, without repetition': {
      arr: [1, 2, 3, 2, 4, 1, 5, 6, 3],
      result: [1, 2, 3],
    },

    'Should work with string values': {
      arr: ['apple', 'banana', 'apple', 'cherry', 'banana', 'date'],
      result: ['apple', 'banana'],
    },

    'Should work with mixed data types': {
      arr: [1, 'apple', 2, 'banana', 'apple', 1, 3],
      result: [1, 'apple'],
    },

    'Should work with boolean values': {
      arr: [true, false, true, true, false],
      result: [true, false],
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {arr, result} = input as ITestData;
    expect(filterArrayDuplicates(arr)).toStrictEqual(result);
  });
});
