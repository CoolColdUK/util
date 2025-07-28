import {generateTestEach} from '../testHelper/generateTestEach';
import {get} from './get';

interface ITestData {
  obj: Record<string, any>;
  path: string;
  defaultValue?: any;
  expected: any;
}

describe('get', () => {
  const testCases: Record<string, ITestData> = {
    'Should get simple property': {
      obj: {a: 1, b: 2},
      path: 'a',
      expected: 1,
    },

    'Should get nested property': {
      obj: {user: {name: 'John', age: 30}},
      path: 'user.name',
      expected: 'John',
    },

    'Should get deep nested property': {
      obj: {a: {b: {c: {d: {e: 'deep'}}}}},
      path: 'a.b.c.d.e',
      expected: 'deep',
    },

    'Should return undefined for non-existent path': {
      obj: {user: {name: 'John'}},
      path: 'user.email',
      expected: undefined,
    },

    'Should return default value for non-existent path': {
      obj: {user: {name: 'John'}},
      path: 'user.email',
      defaultValue: 'default@example.com',
      expected: 'default@example.com',
    },

    'Should return default value for undefined result': {
      obj: {user: {name: 'John'}},
      path: 'user.age',
      defaultValue: 0,
      expected: 0,
    },

    'Should handle null intermediate values': {
      obj: {user: null},
      path: 'user.name',
      defaultValue: 'default',
      expected: 'default',
    },

    'Should handle undefined intermediate values': {
      obj: {user: undefined},
      path: 'user.name',
      defaultValue: 'default',
      expected: 'default',
    },

    'Should handle non-object intermediate values': {
      obj: {user: 'string'},
      path: 'user.name',
      defaultValue: 'default',
      expected: 'default',
    },

    'Should get array element': {
      obj: {items: [1, 2, 3]},
      path: 'items.1',
      expected: 2,
    },

    'Should get nested array element': {
      obj: {data: {users: ['John', 'Jane', 'Alice']}},
      path: 'data.users.2',
      expected: 'Alice',
    },

    'Should get object in array': {
      obj: {
        users: [
          {name: 'John', age: 30},
          {name: 'Jane', age: 25},
        ],
      },
      path: 'users.0.name',
      expected: 'John',
    },

    'Should get property from object in array': {
      obj: {
        users: [
          {name: 'John', age: 30},
          {name: 'Jane', age: 25},
        ],
      },
      path: 'users.1.age',
      expected: 25,
    },

    'Should handle array index out of bounds': {
      obj: {items: [1, 2, 3]},
      path: 'items.5',
      expected: undefined,
    },

    'Should handle array index out of bounds with default': {
      obj: {items: [1, 2, 3]},
      path: 'items.5',
      defaultValue: 'not found',
      expected: 'not found',
    },

    'Should handle empty path': {
      obj: {a: 1, b: 2},
      path: '',
      expected: undefined,
    },

    'Should handle empty path with default': {
      obj: {a: 1, b: 2},
      path: '',
      defaultValue: 'empty',
      expected: 'empty',
    },

    'Should handle single dot path': {
      obj: {a: 1, '': 'empty'},
      path: '.',
      expected: undefined,
    },

    'Should handle single dot path with default': {
      obj: {a: 1},
      path: '.',
      defaultValue: 'dot',
      expected: 'dot',
    },

    'Should handle mixed array and object paths': {
      obj: {data: {users: [{name: 'John', roles: ['admin', 'user']}, {name: 'Jane'}]}},
      path: 'data.users.0.roles.1',
      expected: 'user',
    },

    'Should handle deep array nesting': {
      obj: {
        matrix: [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
      },
      path: 'matrix.1.0',
      expected: 3,
    },

    'Should handle falsy values': {
      obj: {user: {name: '', age: 0, active: false}},
      path: 'user.name',
      expected: '',
    },

    'Should handle falsy values with default': {
      obj: {user: {name: '', age: 0, active: false}},
      path: 'user.name',
      defaultValue: 'default name',
      expected: '',
    },

    'Should handle null values': {
      obj: {user: {name: null}},
      path: 'user.name',
      expected: null,
    },

    'Should handle undefined values': {
      obj: {user: {name: undefined}},
      path: 'user.name',
      expected: undefined,
    },

    'Should handle undefined values with default': {
      obj: {user: {name: undefined}},
      path: 'user.name',
      defaultValue: 'default',
      expected: 'default',
    },

    'Should handle complex nested structure': {
      obj: {
        company: {
          departments: [
            {
              name: 'Engineering',
              employees: [
                {name: 'John', skills: ['JavaScript', 'TypeScript']},
                {name: 'Jane', skills: ['Python', 'React']},
              ],
            },
          ],
        },
      },
      path: 'company.departments.0.employees.1.skills.0',
      expected: 'Python',
    },

    'Should handle complex nested structure with missing path': {
      obj: {
        company: {
          departments: [
            {
              name: 'Engineering',
              employees: [{name: 'John', skills: ['JavaScript', 'TypeScript']}],
            },
          ],
        },
      },
      path: 'company.departments.0.employees.1.skills.0',
      defaultValue: 'No skill found',
      expected: 'No skill found',
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {obj, path, defaultValue, expected} = input as ITestData;
    const result = get(obj, path, defaultValue);
    expect(result).toEqual(expected);
  });
});
