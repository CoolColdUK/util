import {mergeReplaceArray} from './mergeReplaceArray';

describe('mergeReplaceArray', () => {
  it('should merge objects with array values', () => {
    const obj1 = {items: [1, 2, 3]};
    const obj2 = {items: [4, 5, 6]};
    expect(mergeReplaceArray(obj1, obj2)).toEqual({items: [4, 5, 6]});
  });

  it('should deep merge nested objects', () => {
    type UserType = {
      user: {
        name?: string;
        age?: number;
        address: {
          city?: string;
          zip?: string;
          street?: string;
        };
      };
    };

    const obj1: UserType = {
      user: {
        name: 'John',
        address: {
          city: 'New York',
          zip: '10001',
        },
      },
    };
    const obj2: Partial<UserType> = {
      user: {
        age: 30,
        address: {
          street: 'Broadway',
        },
      },
    };
    expect(mergeReplaceArray(obj1, obj2)).toEqual({
      user: {
        name: 'John',
        age: 30,
        address: {
          city: 'New York',
          zip: '10001',
          street: 'Broadway',
        },
      },
    });
  });

  it('should handle primitive values', () => {
    const obj1 = {name: 'John', age: 30};
    const obj2 = {name: 'Jane', age: 25};
    expect(mergeReplaceArray(obj1, obj2)).toEqual({name: 'Jane', age: 25});
  });

  it('should handle null values', () => {
    type NullableType = {
      name: string | null;
      address: {city: string} | null;
    };

    const obj1: NullableType = {name: 'John', address: null};
    const obj2: Partial<NullableType> = {name: null, address: {city: 'New York'}};
    expect(mergeReplaceArray(obj1, obj2)).toEqual({
      name: null,
      address: {city: 'New York'},
    });
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = {};
    expect(mergeReplaceArray(obj1, obj2)).toEqual({});
  });

  it('should handle mixed types', () => {
    type MixedType = {
      name: string;
      scores: number[];
      details: {
        age: number;
        hobbies: string[];
      };
    };

    const obj1: MixedType = {
      name: 'John',
      scores: [1, 2, 3],
      details: {
        age: 30,
        hobbies: ['reading', 'gaming'],
      },
    };
    const obj2: Partial<MixedType> = {
      name: 'Jane',
      scores: [4, 5, 6],
      details: {
        age: 25,
        hobbies: ['swimming'],
      },
    };
    expect(mergeReplaceArray(obj1, obj2)).toEqual({
      name: 'Jane',
      scores: [4, 5, 6],
      details: {
        age: 25,
        hobbies: ['swimming'],
      },
    });
  });

  it('should handle nested arrays', () => {
    const obj1 = {
      matrix: [
        [1, 2],
        [3, 4],
      ],
    };
    const obj2 = {
      matrix: [
        [5, 6],
        [7, 8],
      ],
    };
    expect(mergeReplaceArray(obj1, obj2)).toEqual({
      matrix: [
        [5, 6],
        [7, 8],
      ],
    });
  });
});
