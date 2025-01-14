import {combineArraysObject} from './combineArraysObject';

interface TestCase<T> {
  firstArray: Partial<T>[];
  restArrays: Partial<T>[][];
  result: Partial<T>[];
}

describe('combineArraysObject', () => {
  interface TestData {
    a?: string;
    b?: string;
    c?: number;
  }

  const testCases: Record<string, TestCase<TestData>> = {
    'Should combine two arrays of objects': {
      firstArray: [{a: 'A1'}, {a: 'A2'}],
      restArrays: [[{b: 'B1'}, {b: 'B2'}]],
      result: [
        {a: 'A1', b: 'B1'},
        {a: 'A1', b: 'B2'},
        {a: 'A2', b: 'B1'},
        {a: 'A2', b: 'B2'},
      ],
    },
    'Should combine three arrays of objects': {
      firstArray: [{a: 'A1'}, {a: 'A2'}],
      restArrays: [
        [{b: 'B1'}, {b: 'B2'}],
        [{c: 1}, {c: 2}],
      ],
      result: [
        {a: 'A1', b: 'B1', c: 1},
        {a: 'A1', b: 'B1', c: 2},
        {a: 'A1', b: 'B2', c: 1},
        {a: 'A1', b: 'B2', c: 2},
        {a: 'A2', b: 'B1', c: 1},
        {a: 'A2', b: 'B1', c: 2},
        {a: 'A2', b: 'B2', c: 1},
        {a: 'A2', b: 'B2', c: 2},
      ],
    },
    'Should handle an empty first array': {
      firstArray: [],
      restArrays: [[{b: 'B1'}, {b: 'B2'}]],
      result: [],
    },
    'Should handle an empty rest array': {
      firstArray: [{a: 'A1'}, {a: 'A2'}],
      restArrays: [[]],
      result: [{a: 'A1'}, {a: 'A2'}],
    },
    'Should handle no rest arrays': {
      firstArray: [{a: 'A1'}, {a: 'A2'}],
      restArrays: [],
      result: [{a: 'A1'}, {a: 'A2'}],
    },
    'Should handle merging arrays with overlapping keys': {
      firstArray: [{a: 'A1', b: 'B1'}],
      restArrays: [[{b: 'B2', c: 1}, {c: 2}]],
      result: [
        {a: 'A1', b: 'B2', c: 1},
        {a: 'A1', b: 'B1', c: 2},
      ],
    },
  };

  it.each(Object.entries(testCases))('%s', (_title, testcase) => {
    const {firstArray, restArrays, result} = testcase;
    expect(combineArraysObject(firstArray, ...restArrays)).toStrictEqual(result);
  });
});
