import {generateTestEach} from '../testHelper/generateTestEach';
import {setBulk} from './setBulk';

interface TestCase {
  result: Record<string, any>;
  input: Record<string, any>;
}

describe('setBulk', () => {
  const testCases: Record<string, TestCase> = {
    'Should handle a flat object': {
      result: {a: 1, b: 2},
      input: {a: 1, b: 2},
    },
    'Should convert nested object to dot notation': {
      result: {user: {name: 'John', age: 30}},
      input: {'user.name': 'John', 'user.age': 30},
    },
    'Should handle deeply nested objects': {
      result: {a: {b: {c: {d: 42}}}},
      input: {'a.b.c.d': 42},
    },
    'Should ignore arrays and treat them as values': {
      result: {items: [1, 2, 3]},
      input: {'items.0': 1, 'items.1': 2, 'items.2': 3},
    },
    'Should handle null values': {
      result: {key: null, obj: {nested: null}},
      input: {key: null, 'obj.nested': null},
    },
    'Should handle empty objects': {
      result: {},
      input: {},
    },
    'Should handle array of objects': {
      result: {a: [{b: 1}, {c: 2}]},
      input: {'a.0.b': 1, 'a.1.c': 2},
    },
  };

  generateTestEach(testCases, (_title, testCase) => {
    const {result, input} = testCase;
    expect(setBulk(input)).toEqual(result);
  });
});
