import {parseObjectValueFloat} from './parseObjectValueFloat'; // Adjust the import path as needed

describe('parseObjectValueFloat', () => {
  it('should parse specified keys to float and leave others unchanged', () => {
    const input = {
      price: '10.5',
      quantity: '42',
      name: 'item',
      discount: '0.75',
    };
    const keys = ['price', 'discount'];
    const expected = {
      price: 10.5,
      quantity: '42',
      name: 'item',
      discount: 0.75,
    };

    const result = parseObjectValueFloat(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle empty keys array by returning original object', () => {
    const input = {
      price: '10.5',
      quantity: '42',
    };
    const keys: string[] = [];
    const expected = {
      price: '10.5',
      quantity: '42',
    };

    const result = parseObjectValueFloat(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle non-numeric strings by converting to NaN for specified keys', () => {
    const input = {
      price: 'abc',
      quantity: '42',
      name: 'item',
    };
    const keys = ['price'];
    const expected = {
      price: NaN,
      quantity: '42',
      name: 'item',
    };

    const result = parseObjectValueFloat(input, keys);
    expect(result).toEqual(expected);
    expect(isNaN(result['price'])).toBe(true);
  });

  it('should handle null/undefined values by keeping them as-is', () => {
    const input = {
      price: '10.5',
      quantity: null,
      discount: undefined,
    };
    const keys = ['price', 'discount'];
    const expected = {
      price: 10.5,
      quantity: null,
      discount: NaN, // parseFloat(undefined) returns NaN
    };

    const result = parseObjectValueFloat(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle already numeric values correctly', () => {
    const input = {
      price: 10.5,
      quantity: '42',
      discount: '0.75',
    };
    const keys = ['price', 'discount'];
    const expected = {
      price: 10.5, // Already a number, no change
      quantity: '42',
      discount: 0.75,
    };

    const result = parseObjectValueFloat(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle empty object', () => {
    const input = {};
    const keys = ['price'];
    const expected = {};

    const result = parseObjectValueFloat(input, keys);
    expect(result).toEqual(expected);
  });

  it('should handle keys not present in the object', () => {
    const input = {
      name: 'item',
      quantity: '42',
    };
    const keys = ['price', 'discount']; // Keys not in input
    const expected = {
      name: 'item',
      quantity: '42',
    };

    const result = parseObjectValueFloat(input, keys);
    expect(result).toEqual(expected);
  });
});
