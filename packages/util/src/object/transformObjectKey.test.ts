import {generateTestEach} from '../testHelper/generateTestEach';
import {transformObjectKey} from './transformObjectKey';

interface ITestCase {
  data: Record<string, number>;
  fn: (d: string) => string;
  expected: Record<string, string | number>;
}

describe('transformObjectKey', () => {
  const testCases: Record<string, ITestCase> = {
    'no converter': {
      data: {a: 1, b: 2, c: 3},
      fn: (d) => d,
      expected: {a: 1, b: 2, c: 3},
    },
    suffix: {
      data: {a: 1, b: 2, c: 3},
      fn: (d) => `${d}lll`,
      expected: {alll: 1, blll: 2, clll: 3},
    },
  };

  generateTestEach(testCases, (_title, param) => {
    const {data, fn, expected} = param as ITestCase;
    expect(transformObjectKey(data, fn)).toStrictEqual(expected);
  });
});
