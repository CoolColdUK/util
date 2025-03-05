import {generateTestEach} from '../testHelper/generateTestEach';
import {setBulkReverse, ValidatorFn} from './setBulkReverse';

interface TestCase {
  input: Record<string, any>;
  expected: Record<string, any>;
  validator?: ValidatorFn[];
}

describe('setBulkReverse', () => {
  const testCases: Record<string, TestCase> = {
    'Should handle a flat object': {
      input: {a: 1, b: 2},
      expected: {a: 1, b: 2},
    },
    'Should convert nested object to dot notation': {
      input: {user: {name: 'John', age: 30}},
      expected: {'user.name': 'John', 'user.age': 30},
    },
    'Should handle deeply nested objects': {
      input: {a: {b: {c: {d: 42}}}},
      expected: {'a.b.c.d': 42},
    },
    'Should ignore arrays and treat them as values': {
      input: {items: [1, 2, 3]},
      expected: {'items.0': 1, 'items.1': 2, 'items.2': 3},
    },
    'Should handle null values': {
      input: {key: null, obj: {nested: null}},
      expected: {key: null, 'obj.nested': null},
    },
    'Should handle empty objects': {
      input: {},
      expected: {},
    },
    'Should handle array of objects': {
      input: {a: [{b: 1}, {c: 2}]},
      expected: {'a.0.b': 1, 'a.1.c': 2},
    },
    'Should work with File array': {
      input: {a: [new File([''], 'a.txt'), new File([''], 'b.txt')]},
      expected: {'a.0': expect.any(File), 'a.1': expect.any(File)},
      validator: [(_prefix, _key, value) => value instanceof File],
    },
  };

  generateTestEach(testCases, (_title, testCase) => {
    const {input, expected, validator} = testCase;
    expect(setBulkReverse(input, undefined, validator)).toEqual(expected);
  });
});
