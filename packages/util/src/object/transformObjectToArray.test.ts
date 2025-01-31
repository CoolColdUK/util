import {generateTestEach} from '../testHelper/generateTestEach';
import {transformObjectToArray} from './transformObjectToArray';

interface ITestData {
  obj: Record<string, string | number | boolean>;
  result: {id?: string; data: string | number | boolean}[];
}

describe('transformObjectToArray', () => {
  const testCases: Record<string, ITestData> = {
    'Should match for empty': {
      obj: {},
      result: [],
    },

    'Should match with value': {
      obj: {a: 1, b: 5},
      result: [
        {id: 'a', data: 1},
        {id: 'b', data: 5},
      ],
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {obj, result} = input as ITestData;
    expect(transformObjectToArray(obj)).toStrictEqual(result);
  });
});
