import {generateTestEach} from '../testHelper/generateTestEach';
import {uniqueObjectWithKey} from './uniqueObjectWithKey';

interface ITestData {
  arr: {[key: string]: any}[];
  key: string;
  result: {[key: string]: any}[];
}

describe('uniqueObjectWithKey', () => {
  const testCases: Record<string, ITestData> = {
    'Should return empty array when input is empty': {
      arr: [],
      key: 'id',
      result: [],
    },

    'Should remove duplicates based on key': {
      arr: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Alice'}, // Duplicate name
        {id: 4, name: 'Charlie'},
        {id: 5, name: 'Bob'}, // Duplicate name
      ],
      key: 'name',
      result: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 4, name: 'Charlie'},
      ],
    },

    'Should work when all values are unique': {
      arr: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ],
      key: 'name',
      result: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ],
    },

    'Should remove duplicates when using different key': {
      arr: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Alice'},
        {id: 3, name: 'Alice'}, // Duplicate id
        {id: 4, name: 'Charlie'},
      ],
      key: 'id',
      result: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Alice'},
        {id: 3, name: 'Alice'},
        {id: 4, name: 'Charlie'},
      ],
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {arr, key, result} = input as ITestData;
    expect(uniqueObjectWithKey(arr, key)).toStrictEqual(result);
  });
});
