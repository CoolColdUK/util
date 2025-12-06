import {uniqueArrayByKey} from './uniqueArrayByKey';

interface TestCase<T extends object> {
  arr: T[];
  key: string;
  expected: T[];
}

describe('uniqueArrayByKey', () => {
  const testCases: Record<string, TestCase<any>> = {
    'Should remove duplicates by simple key': {
      arr: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 1, name: 'Alice Duplicate'},
        {id: 3, name: 'Charlie'},
      ],
      key: 'id',
      expected: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ],
    },

    'Should preserve first occurrence when duplicates exist': {
      arr: [
        {id: 1, name: 'First'},
        {id: 2, name: 'Second'},
        {id: 1, name: 'Third'},
        {id: 1, name: 'Fourth'},
      ],
      key: 'id',
      expected: [
        {id: 1, name: 'First'},
        {id: 2, name: 'Second'},
      ],
    },

    'Should handle nested key path': {
      arr: [
        {user: {id: 1, name: 'Alice'}},
        {user: {id: 2, name: 'Bob'}},
        {user: {id: 1, name: 'Alice Duplicate'}},
        {user: {id: 3, name: 'Charlie'}},
      ],
      key: 'user.id',
      expected: [{user: {id: 1, name: 'Alice'}}, {user: {id: 2, name: 'Bob'}}, {user: {id: 3, name: 'Charlie'}}],
    },

    'Should handle deep nested key path': {
      arr: [{data: {user: {profile: {id: 1}}}}, {data: {user: {profile: {id: 2}}}}, {data: {user: {profile: {id: 1}}}}],
      key: 'data.user.profile.id',
      expected: [{data: {user: {profile: {id: 1}}}}, {data: {user: {profile: {id: 2}}}}],
    },

    'Should handle string values as key': {
      arr: [
        {name: 'Alice', age: 30},
        {name: 'Bob', age: 25},
        {name: 'Alice', age: 35},
        {name: 'Charlie', age: 40},
      ],
      key: 'name',
      expected: [
        {name: 'Alice', age: 30},
        {name: 'Bob', age: 25},
        {name: 'Charlie', age: 40},
      ],
    },

    'Should handle number values as key': {
      arr: [
        {id: 1, value: 100},
        {id: 2, value: 200},
        {id: 1, value: 300},
        {id: 3, value: 400},
      ],
      key: 'id',
      expected: [
        {id: 1, value: 100},
        {id: 2, value: 200},
        {id: 3, value: 400},
      ],
    },

    'Should handle boolean values as key': {
      arr: [
        {id: 1, active: true},
        {id: 2, active: false},
        {id: 3, active: true},
        {id: 4, active: false},
      ],
      key: 'active',
      expected: [
        {id: 1, active: true},
        {id: 2, active: false},
      ],
    },

    'Should handle null values at key': {
      arr: [
        {id: 1, value: null},
        {id: 2, value: 'test'},
        {id: 3, value: null},
        {id: 4, value: 'another'},
      ],
      key: 'value',
      expected: [
        {id: 1, value: null},
        {id: 2, value: 'test'},
        {id: 4, value: 'another'},
      ],
    },

    'Should handle undefined values at key': {
      arr: [
        {id: 1, value: undefined},
        {id: 2, value: 'test'},
        {id: 3, value: undefined},
        {id: 4, value: 'another'},
      ],
      key: 'value',
      expected: [
        {id: 1, value: undefined},
        {id: 2, value: 'test'},
        {id: 4, value: 'another'},
      ],
    },

    'Should handle empty array': {
      arr: [],
      key: 'id',
      expected: [],
    },

    'Should handle array with single item': {
      arr: [{id: 1, name: 'Alice'}],
      key: 'id',
      expected: [{id: 1, name: 'Alice'}],
    },

    'Should handle array with no duplicates': {
      arr: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ],
      key: 'id',
      expected: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ],
    },

    'Should handle multiple duplicates': {
      arr: [
        {id: 1, name: 'First'},
        {id: 2, name: 'Second'},
        {id: 1, name: 'Third'},
        {id: 3, name: 'Fourth'},
        {id: 2, name: 'Fifth'},
        {id: 1, name: 'Sixth'},
      ],
      key: 'id',
      expected: [
        {id: 1, name: 'First'},
        {id: 2, name: 'Second'},
        {id: 3, name: 'Fourth'},
      ],
    },

    'Should handle non-existent key path': {
      arr: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 1, name: 'Charlie'},
      ],
      key: 'nonExistent',
      expected: [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 1, name: 'Charlie'},
      ],
    },

    'Should handle non-existent nested key path': {
      arr: [
        {id: 1, user: {name: 'Alice'}},
        {id: 2, user: {name: 'Bob'}},
        {id: 1, user: {name: 'Charlie'}},
      ],
      key: 'user.email',
      expected: [
        {id: 1, user: {name: 'Alice'}},
        {id: 2, user: {name: 'Bob'}},
        {id: 1, user: {name: 'Charlie'}},
      ],
    },

    'Should handle array with all same key values': {
      arr: [
        {id: 1, name: 'First'},
        {id: 1, name: 'Second'},
        {id: 1, name: 'Third'},
      ],
      key: 'id',
      expected: [{id: 1, name: 'First'}],
    },

    'Should handle zero as key value': {
      arr: [
        {id: 0, name: 'Zero'},
        {id: 1, name: 'One'},
        {id: 0, name: 'Zero Duplicate'},
        {id: 2, name: 'Two'},
      ],
      key: 'id',
      expected: [
        {id: 0, name: 'Zero'},
        {id: 1, name: 'One'},
        {id: 2, name: 'Two'},
      ],
    },

    'Should handle empty string as key value': {
      arr: [
        {id: 1, name: ''},
        {id: 2, name: 'Bob'},
        {id: 3, name: ''},
        {id: 4, name: 'Charlie'},
      ],
      key: 'name',
      expected: [
        {id: 1, name: ''},
        {id: 2, name: 'Bob'},
        {id: 4, name: 'Charlie'},
      ],
    },

    'Should handle complex objects with nested structures': {
      arr: [
        {
          id: 1,
          metadata: {tags: ['a', 'b'], score: 10},
          user: {profile: {name: 'Alice'}},
        },
        {
          id: 2,
          metadata: {tags: ['c', 'd'], score: 20},
          user: {profile: {name: 'Bob'}},
        },
        {
          id: 1,
          metadata: {tags: ['e', 'f'], score: 30},
          user: {profile: {name: 'Alice Duplicate'}},
        },
      ],
      key: 'id',
      expected: [
        {
          id: 1,
          metadata: {tags: ['a', 'b'], score: 10},
          user: {profile: {name: 'Alice'}},
        },
        {
          id: 2,
          metadata: {tags: ['c', 'd'], score: 20},
          user: {profile: {name: 'Bob'}},
        },
      ],
    },

    'Should handle objects with array values at key path': {
      arr: [
        {id: 1, items: [1, 2, 3]},
        {id: 2, items: [4, 5, 6]},
        {id: 1, items: [7, 8, 9]},
      ],
      key: 'id',
      expected: [
        {id: 1, items: [1, 2, 3]},
        {id: 2, items: [4, 5, 6]},
      ],
    },
  };

  it.each(Object.entries(testCases))('%s', (_title, testcase) => {
    const {arr, key, expected} = testcase;
    const result = uniqueArrayByKey(arr, key);
    expect(result).toStrictEqual(expected);
  });

  it('Should not mutate the original array', () => {
    const originalArray = [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'Bob'},
      {id: 1, name: 'Charlie'},
    ];
    const originalArrayCopy = JSON.parse(JSON.stringify(originalArray));
    uniqueArrayByKey(originalArray, 'id');
    expect(originalArray).toStrictEqual(originalArrayCopy);
  });

  it('Should return a new array instance', () => {
    const originalArray = [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'Bob'},
    ];
    const result = uniqueArrayByKey(originalArray, 'id');
    expect(result).not.toBe(originalArray);
  });
});
