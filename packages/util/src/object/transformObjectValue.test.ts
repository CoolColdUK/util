import {generateTestEach} from '../testHelper/generateTestEach';
import {transformObjectValue} from './transformObjectValue';

interface ITestCase {
  data: Record<string, number>;
  fn: (d: number) => string | number;
  expected: Record<string, string | number>;
}

describe('transformObjectValue', () => {
  const testCases: Record<string, ITestCase> = {
    'no converter': {
      data: {a: 1, b: 2, c: 3},
      fn: (d) => d,
      expected: {a: 1, b: 2, c: 3},
    },
    'reduce one': {
      data: {a: 1, b: 2, c: 3},
      fn: (d) => d - 1,
      expected: {a: 0, b: 1, c: 2},
    },
    'to string': {
      data: {a: 1, b: 2, c: 3},
      fn: (d) => ['', 'a', 'b', 'c'][d] as string,
      expected: {a: 'a', b: 'b', c: 'c'},
    },
  };

  generateTestEach(testCases, (_title, param) => {
    const {data, fn, expected} = param as ITestCase;
    expect(transformObjectValue(data, fn)).toStrictEqual(expected);
  });
});
