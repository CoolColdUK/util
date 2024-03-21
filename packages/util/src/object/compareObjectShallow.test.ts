import {shallowCompare} from './compareObjectShallow';

interface ITestData {
  obj1: Record<string, string | number | boolean>;
  obj2: Record<string, string | number | boolean>;
  result: boolean;
}

describe('shallowCompare', () => {
  const testCases: Record<string, ITestData> = {
    'Should match for empty': {
      obj1: {},
      obj2: {},
      result: true,
    },

    'Should match for simple object': {
      obj1: {a: 1, b: 'two', c: false},
      obj2: {b: 'two', a: 1, c: false},
      result: true,
    },

    'Should not match for simple object': {
      obj1: {a: 2, b: 'two', c: false},
      obj2: {b: 'two', a: 1, c: false},
      result: false,
    },

    'Should not match for different type': {
      obj1: {a: '1', b: 'two', c: false},
      obj2: {b: 'two', a: 1, c: false},
      result: false,
    },

    'Should not match for different length': {
      obj1: {a: '1', b: 'two', c: false, e: 0},
      obj2: {b: 'two', a: 1, c: false},
      result: false,
    },
  };

  test.each(Object.keys(testCases).map((tc) => [tc, testCases[tc]]))('%s', (_title, input) => {
    const {obj1, obj2, result} = input as ITestData;
    expect(shallowCompare(obj1, obj2)).toBe(result);
  });
});
