import {generateTestEach} from '../testHelper/generateTestEach';
import {pick} from './pick';

interface ITestData {
  object: Record<string, any>;
  paths: string[];
  expected: Record<string, any>;
}

describe('pick', () => {
  const testCases: Record<string, ITestData> = {
    'Should pick simple properties': {
      object: {a: 1, b: 2, c: 3},
      paths: ['a', 'c'],
      expected: {a: 1, c: 3},
    },

    'Should pick single property': {
      object: {name: 'John', age: 30, email: 'john@example.com'},
      paths: ['name'],
      expected: {name: 'John'},
    },

    'Should pick multiple properties': {
      object: {id: 1, name: 'John', age: 30, email: 'john@example.com', role: 'admin'},
      paths: ['name', 'email', 'role'],
      expected: {name: 'John', email: 'john@example.com', role: 'admin'},
    },

    'Should handle non-existent properties': {
      object: {name: 'John', age: 30},
      paths: ['name', 'phone', 'address'],
      expected: {name: 'John'},
    },

    'Should handle empty paths array': {
      object: {name: 'John', age: 30},
      paths: [],
      expected: {},
    },

    'Should handle empty object': {
      object: {},
      paths: ['name', 'age'],
      expected: {},
    },

    'Should handle null and undefined values': {
      object: {name: 'John', age: null, email: undefined, role: 'admin'},
      paths: ['name', 'age', 'email', 'role'],
      expected: {name: 'John', age: null, email: undefined, role: 'admin'},
    },

    'Should handle nested object properties': {
      object: {
        user: {
          name: 'John',
          profile: {
            age: 30,
            email: 'john@example.com',
          },
        },
        settings: {
          theme: 'dark',
        },
      },
      paths: ['user', 'settings'],
      expected: {
        user: {
          name: 'John',
          profile: {
            age: 30,
            email: 'john@example.com',
          },
        },
        settings: {
          theme: 'dark',
        },
      },
    },

    'Should handle dot notation for nested properties': {
      object: {
        user: {
          name: 'John',
          profile: {
            age: 30,
            email: 'john@example.com',
          },
        },
        settings: {
          theme: 'dark',
        },
      },
      paths: ['user.name', 'user.profile.age', 'settings.theme'],
      expected: {
        'user.name': 'John',
        'user.profile.age': 30,
        'settings.theme': 'dark',
      },
    },

    'Should handle deep nested dot notation': {
      object: {
        company: {
          departments: {
            engineering: {
              team: {
                lead: 'Alice',
                members: ['Bob', 'Charlie'],
              },
            },
          },
        },
      },
      paths: ['company.departments.engineering.team.lead'],
      expected: {
        'company.departments.engineering.team.lead': 'Alice',
      },
    },

    'Should handle mixed simple and nested properties': {
      object: {
        id: 1,
        user: {
          name: 'John',
          profile: {
            age: 30,
          },
        },
        active: true,
      },
      paths: ['id', 'user.name', 'active'],
      expected: {
        id: 1,
        'user.name': 'John',
        active: true,
      },
    },

    'Should handle array properties': {
      object: {
        name: 'John',
        hobbies: ['reading', 'gaming'],
        scores: [85, 92, 78],
      },
      paths: ['name', 'hobbies', 'scores'],
      expected: {
        name: 'John',
        hobbies: ['reading', 'gaming'],
        scores: [85, 92, 78],
      },
    },

    'Should handle array with dot notation': {
      object: {
        users: [
          {name: 'John', age: 30},
          {name: 'Jane', age: 25},
        ],
      },
      paths: ['users.0.name', 'users.1.age'],
      expected: {
        'users.0.name': 'John',
        'users.1.age': 25,
      },
    },

    'Should handle function properties': {
      object: {
        name: 'John',
        greet: () => 'Hello',
        calculate: (a: number, b: number) => a + b,
      },
      paths: ['name', 'greet'],
      expected: {
        name: 'John',
        greet: () => 'Hello',
      },
    },

    'Should handle boolean properties': {
      object: {
        name: 'John',
        active: true,
        verified: false,
        premium: true,
      },
      paths: ['name', 'active', 'verified'],
      expected: {
        name: 'John',
        active: true,
        verified: false,
      },
    },

    'Should handle number properties': {
      object: {
        id: 1,
        age: 30,
        score: 95.5,
        count: 0,
      },
      paths: ['id', 'age', 'score'],
      expected: {
        id: 1,
        age: 30,
        score: 95.5,
      },
    },

    'Should handle string properties with special characters': {
      object: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1-555-123-4567',
        address: '123 Main St, City, State 12345',
      },
      paths: ['name', 'email', 'phone'],
      expected: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1-555-123-4567',
      },
    },

    'Should handle object with symbol keys': {
      object: {
        name: 'John',
        [Symbol('id')]: 1,
        [Symbol('secret')]: 'hidden',
      },
      paths: ['name'],
      expected: {
        name: 'John',
      },
    },

    'Should handle object with numeric string keys': {
      object: {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        name: 'John',
      },
      paths: ['0', '2', 'name'],
      expected: {
        '0': 'zero',
        '2': 'two',
        name: 'John',
      },
    },

    'Should handle object with empty string key': {
      object: {
        '': 'empty',
        name: 'John',
        age: 30,
      },
      paths: ['', 'name'],
      expected: {
        '': 'empty',
        name: 'John',
      },
    },

    'Should handle complex nested structure': {
      object: {
        company: {
          name: 'Tech Corp',
          departments: {
            engineering: {
              lead: 'Alice',
              team: ['Bob', 'Charlie', 'David'],
            },
            marketing: {
              lead: 'Eve',
              budget: 50000,
            },
          },
        },
        year: 2024,
      },
      paths: ['company.name', 'company.departments.engineering.lead', 'year'],
      expected: {
        'company.name': 'Tech Corp',
        'company.departments.engineering.lead': 'Alice',
        year: 2024,
      },
    },

    'Should handle object with Date properties': {
      object: {
        name: 'John',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-15'),
      },
      paths: ['name', 'createdAt'],
      expected: {
        name: 'John',
        createdAt: new Date('2024-01-01'),
      },
    },

    'Should handle object with RegExp properties': {
      object: {
        name: 'John',
        pattern: new RegExp('^[a-zA-Z]+$'),
        flags: new RegExp('gi'),
      },
      paths: ['name', 'pattern'],
      expected: {
        name: 'John',
        pattern: new RegExp('^[a-zA-Z]+$'),
      },
    },

    'Should handle object with Map and Set properties': {
      object: {
        name: 'John',
        scores: new Map([
          ['math', 95],
          ['science', 88],
        ]),
        tags: new Set(['developer', 'senior']),
      },
      paths: ['name', 'scores'],
      expected: {
        name: 'John',
        scores: new Map([
          ['math', 95],
          ['science', 88],
        ]),
      },
    },

    'Should handle object with circular reference': {
      object: {
        name: 'John',
        self: null as any,
      },
      paths: ['name'],
      expected: {
        name: 'John',
      },
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {object, paths, expected} = input as ITestData;
    const result = pick(object, paths);
    expect(result).toEqual(expected);
  });
});
