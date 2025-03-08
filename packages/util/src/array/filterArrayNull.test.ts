import {filterArrayNull} from './filterArrayNull'; // Import the filterArrayNull function from your module

describe('filterArrayNull function', () => {
  it('should filter out null values from the array', () => {
    const inputArray = [1, null, 2, null, 3, null];
    const filteredArray = filterArrayNull(inputArray);
    expect(filteredArray).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all elements are null', () => {
    const inputArray: (number | null)[] = [null, null, null];
    const filteredArray = filterArrayNull(inputArray);
    expect(filteredArray).toEqual([]);
  });

  it('should not modify the original array', () => {
    const inputArray = [1, null, 2, null, 3, null];
    filterArrayNull(inputArray);
    expect(inputArray).toEqual([1, null, 2, null, 3, null]);
  });

  it('should preserve non-null elements in the array', () => {
    const inputArray = [null, 'hello', null, 'world', null];
    const filteredArray = filterArrayNull(inputArray);
    expect(filteredArray).toEqual(['hello', 'world']);
  });

  it('should preserve the order of elements in the array', () => {
    const inputArray = [1, null, 2, null, 3];
    const filteredArray = filterArrayNull(inputArray);
    expect(filteredArray).toEqual([1, 2, 3]);
  });

  it('should handle arrays with no null elements', () => {
    const inputArray = [1, 2, 3];
    const filteredArray = filterArrayNull(inputArray);
    expect(filteredArray).toEqual([1, 2, 3]);
  });

  it('should handle an empty input array', () => {
    const inputArray: (number | null)[] = [];
    const filteredArray = filterArrayNull(inputArray);
    expect(filteredArray).toEqual([]);
  });
});
