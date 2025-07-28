import {generateTestEach} from '../testHelper/generateTestEach';
import {set} from './set';

interface ITestData {
  obj: Record<string, any>;
  path: string;
  value: any;
  expected: Record<string, any>;
}

describe('set', () => {
  const testCases: Record<string, ITestData> = {
    'Should set simple property': {
      obj: {a: 1},
      path: 'b',
      value: 2,
      expected: {a: 1, b: 2},
    },

    'Should set nested property': {
      obj: {user: {name: 'John'}},
      path: 'user.age',
      value: 30,
      expected: {user: {name: 'John', age: 30}},
    },

    'Should create nested structure': {
      obj: {},
      path: 'user.profile.name',
      value: 'Jane',
      expected: {user: {profile: {name: 'Jane'}}},
    },

    'Should overwrite existing value': {
      obj: {user: {name: 'John'}},
      path: 'user.name',
      value: 'Jane',
      expected: {user: {name: 'Jane'}},
    },

    'Should handle deep nesting': {
      obj: {},
      path: 'a.b.c.d.e',
      value: 'deep',
      expected: {a: {b: {c: {d: {e: 'deep'}}}}},
    },

    'Should handle null intermediate values': {
      obj: {user: null},
      path: 'user.name',
      value: 'John',
      expected: {user: {name: 'John'}},
    },

    'Should handle undefined intermediate values': {
      obj: {user: undefined},
      path: 'user.name',
      value: 'John',
      expected: {user: {name: 'John'}},
    },

    'Should preserve existing properties': {
      obj: {user: {name: 'John', age: 30}},
      path: 'user.email',
      value: 'john@example.com',
      expected: {user: {name: 'John', age: 30, email: 'john@example.com'}},
    },

    'Should handle empty path': {
      obj: {a: 1},
      path: '',
      value: 'test',
      expected: {a: 1, '': 'test'},
    },

    'Should handle single dot path': {
      obj: {a: 1},
      path: '.',
      value: 'test',
      expected: {a: 1, '': {'': 'test'}},
    },

    'Should set array element': {
      obj: {items: [1, 2, 3]},
      path: 'items.1',
      value: 5,
      expected: {items: [1, 5, 3]},
    },

    'Should create array and set element': {
      obj: {},
      path: 'items.0',
      value: 'first',
      expected: {items: ['first']},
    },

    'Should handle nested array access': {
      obj: {data: {users: ['John', 'Jane']}},
      path: 'data.users.1',
      value: 'Alice',
      expected: {data: {users: ['John', 'Alice']}},
    },

    'Should handle deep array nesting': {
      obj: {},
      path: 'matrix.0.1.2',
      value: 'deep',
      expected: {matrix: [[, [, , 'deep']]]},
    },

    'Should handle array with object elements': {
      obj: {users: [{name: 'John'}, {name: 'Jane'}]},
      path: 'users.0.age',
      value: 30,
      expected: {users: [{name: 'John', age: 30}, {name: 'Jane'}]},
    },

    'Should handle array index as string': {
      obj: {items: [1, 2, 3]},
      path: 'items.2',
      value: 10,
      expected: {items: [1, 2, 10]},
    },

    'Should handle array index as string with missing indexes': {
      obj: {items: [1, 2]},
      path: 'items.5',
      value: 10,
      expected: {items: [1, 2, , , , 10]},
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {obj, path, value, expected} = input as ITestData;
    const result = set({...obj}, path, value);
    expect(result).toEqual(expected);
  });
});
