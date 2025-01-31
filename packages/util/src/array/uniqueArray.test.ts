import {generateTestEach} from '../testHelper/generateTestEach';
import {uniqueArray} from './uniqueArray';

interface ITestCase {
  data: string[];
  expected: string[];
}
describe('uniqueArray', () => {
  const testCases: Record<string, ITestCase> = {
    'Should remove duplicate': {
      data: ['a', 'b', 'a'],
      expected: ['a', 'b'],
    },
    'Should not do anything if no dupe': {
      data: ['a', 'b', 'c'],
      expected: ['a', 'b', 'c'],
    },
  };

  generateTestEach(testCases, (_title, param) => {
    const {data, expected} = param as ITestCase;
    expect(uniqueArray(data)).toStrictEqual(expected);
  });
});
