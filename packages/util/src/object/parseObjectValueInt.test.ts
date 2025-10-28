import {parseObjectValueInt} from './parseObjectValueInt'; // Adjust the import path as needed

describe('parseObjectValueInt', () => {
  it('should parse specified keys to integer and leave others unchanged', () => {
    const input = {
      quantity: '42',
      price: '10.5',
      name: 'item',
      stock: '100',
    };
    const keys = ['quantity', 'stock'];
    const expected = {
      quantity: 42,
      price: '10.5',
      name: 'item',
      stock: 100,
    };

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle empty keys array by returning original object', () => {
    const input = {
      quantity: '42',
      price: '10.5',
    };
    const keys: string[] = [];
    const expected = {
      quantity: '42',
      price: '10.5',
    };

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle non-numeric strings by converting to NaN for specified keys', () => {
    const input = {
      quantity: 'abc',
      price: '10.5',
      name: 'item',
    };
    const keys = ['quantity'];
    const expected = {
      quantity: NaN,
      price: '10.5',
      name: 'item',
    };

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
    expect(Number.isNaN(result['quantity'])).toBe(true);
  });

  it('should handle null/undefined values by keeping them as-is or converting to NaN', () => {
    const input = {
      quantity: null,
      price: '10.5',
      stock: undefined,
    };
    const keys = ['quantity', 'stock'];
    const expected = {
      quantity: NaN, // parseInt(null, 10) returns NaN
      price: '10.5',
      stock: NaN, // parseInt(undefined, 10) returns NaN
    };

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle already numeric values correctly', () => {
    const input = {
      quantity: 42,
      price: '10.5',
      stock: '100',
    };
    const keys = ['quantity', 'stock'];
    const expected = {
      quantity: 42, // Already an integer, no change
      price: '10.5',
      stock: 100,
    };

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle decimal numbers by truncating to integer for specified keys', () => {
    const input = {
      quantity: '42.7',
      price: '10.5',
      name: 'item',
    };
    const keys = ['quantity'];
    const expected = {
      quantity: 42, // parseInt truncates decimal part
      price: '10.5',
      name: 'item',
    };

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle empty object', () => {
    const input = {};
    const keys = ['quantity'];
    const expected = {};

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle keys not present in the object', () => {
    const input = {
      name: 'item',
      price: '10.5',
    };
    const keys = ['quantity', 'stock']; // Keys not in input
    const expected = {
      name: 'item',
      price: '10.5',
    };

    const result = parseObjectValueInt(input, keys);
    expect(result).toEqual(expected);
  });
});
