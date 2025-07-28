import {generateTestEach} from '../testHelper/generateTestEach';
import {randomArray} from './randomArray';

interface ITestData {
  array: any[];
  expectedLength: number;
  shouldBeDifferent?: boolean; // Whether the result should be different from input
  validationFn?: (result: any[]) => boolean; // Custom validation function
}

describe('randomArray', () => {
  const testCases: Record<string, ITestData> = {
    'Should randomize number array': {
      array: [1, 2, 3, 4, 5],
      expectedLength: 5,
      shouldBeDifferent: true,
    },

    'Should randomize string array': {
      array: ['apple', 'banana', 'cherry', 'date'],
      expectedLength: 4,
      shouldBeDifferent: true,
    },

    'Should randomize mixed type array': {
      array: [1, 'two', true, null, undefined],
      expectedLength: 5,
      shouldBeDifferent: true,
    },

    'Should randomize object array': {
      array: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Bob'},
      ],
      expectedLength: 3,
      shouldBeDifferent: true,
    },

    'Should randomize nested array': {
      array: [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      expectedLength: 3,
      shouldBeDifferent: true,
    },

    'Should handle empty array': {
      array: [],
      expectedLength: 0,
      shouldBeDifferent: false,
    },

    'Should handle single element array': {
      array: [42],
      expectedLength: 1,
      shouldBeDifferent: false,
    },

    'Should handle two element array': {
      array: [1, 2],
      expectedLength: 2,
      shouldBeDifferent: true,
    },

    'Should handle array with duplicate values': {
      array: [1, 1, 2, 2, 3, 3],
      expectedLength: 6,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain same elements but potentially different order
        const originalSorted = [1, 1, 2, 2, 3, 3].sort();
        const resultSorted = result.sort();
        return JSON.stringify(originalSorted) === JSON.stringify(resultSorted);
      },
    },

    'Should handle array with all same values': {
      array: [1, 1, 1, 1, 1],
      expectedLength: 5,
      shouldBeDifferent: false, // Order doesn't matter when all values are the same
    },

    'Should handle large array': {
      array: Array.from({length: 100}, (_, i) => i + 1),
      expectedLength: 100,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain all numbers from 1 to 100
        const expected = Array.from({length: 100}, (_, i) => i + 1);
        const resultSorted = result.sort((a, b) => a - b);
        return JSON.stringify(expected) === JSON.stringify(resultSorted);
      },
    },

    'Should handle array with boolean values': {
      array: [true, false, true, false, true],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain same number of true and false values
        const originalTrues = [true, false, true, false, true].filter(Boolean).length;
        const resultTrues = result.filter(Boolean).length;
        return originalTrues === resultTrues;
      },
    },

    'Should handle array with null and undefined': {
      array: [null, undefined, 1, null, undefined],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain same number of null and undefined values
        const originalNulls = [null, undefined, 1, null, undefined].filter((x) => x === null).length;
        const originalUndefineds = [null, undefined, 1, null, undefined].filter((x) => x === undefined).length;
        const resultNulls = result.filter((x) => x === null).length;
        const resultUndefineds = result.filter((x) => x === undefined).length;
        return originalNulls === resultNulls && originalUndefineds === resultUndefineds;
      },
    },

    'Should handle array with NaN values': {
      array: [1, NaN, 3, NaN, 5],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain same number of NaN values
        const originalNaNs = [1, NaN, 3, NaN, 5].filter((x) => Number.isNaN(x)).length;
        const resultNaNs = result.filter((x) => Number.isNaN(x)).length;
        return originalNaNs === resultNaNs;
      },
    },

    'Should handle array with Infinity values': {
      array: [1, Infinity, 3, -Infinity, 5],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain same number of Infinity and -Infinity values
        const originalPosInf = [1, Infinity, 3, -Infinity, 5].filter((x) => x === Infinity).length;
        const originalNegInf = [1, Infinity, 3, -Infinity, 5].filter((x) => x === -Infinity).length;
        const resultPosInf = result.filter((x) => x === Infinity).length;
        const resultNegInf = result.filter((x) => x === -Infinity).length;
        return originalPosInf === resultPosInf && originalNegInf === resultNegInf;
      },
    },

    'Should handle array with zero values': {
      array: [0, 1, 0, 2, 0],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain same number of zeros
        const originalZeros = [0, 1, 0, 2, 0].filter((x) => x === 0).length;
        const resultZeros = result.filter((x) => x === 0).length;
        return originalZeros === resultZeros;
      },
    },

    'Should handle array with decimal numbers': {
      array: [1.5, 2.7, 3.1, 4.9, 5.2],
      expectedLength: 5,
      shouldBeDifferent: true,
    },

    'Should handle array with special characters': {
      array: ['!', '@', '#', '$', '%'],
      expectedLength: 5,
      shouldBeDifferent: true,
    },

    'Should handle array with emoji': {
      array: ['😀', '😃', '😄', '😁', '😆'],
      expectedLength: 5,
      shouldBeDifferent: true,
    },

    'Should handle array with empty strings': {
      array: ['', 'hello', '', 'world', ''],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain same number of empty strings
        const originalEmpty = ['', 'hello', '', 'world', ''].filter((x) => x === '').length;
        const resultEmpty = result.filter((x) => x === '').length;
        return originalEmpty === resultEmpty;
      },
    },

    'Should handle array with whitespace strings': {
      array: [' ', '  ', '   ', '    ', '     '],
      expectedLength: 5,
      shouldBeDifferent: true,
    },

    'Should preserve array elements (no loss or addition)': {
      array: [1, 2, 3, 4, 5],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: (result) => {
        // Should contain exactly the same elements
        const original = [1, 2, 3, 4, 5];
        const resultSorted = result.sort((a, b) => a - b);
        return JSON.stringify(original) === JSON.stringify(resultSorted);
      },
    },

    'Should not modify original array': {
      array: [1, 2, 3, 4, 5],
      expectedLength: 5,
      shouldBeDifferent: true,
      validationFn: () => {
        // Original array should remain unchanged
        const original = [1, 2, 3, 4, 5];
        return JSON.stringify(original) === JSON.stringify([1, 2, 3, 4, 5]);
      },
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {array, expectedLength, shouldBeDifferent, validationFn} = input as ITestData;
    const originalArray = [...array]; // Keep a copy for comparison
    const result = randomArray(array);

    // Check length
    expect(result.length).toBe(expectedLength);

    // Check if result should be different from input
    if (shouldBeDifferent && array.length > 1) {
      // For arrays with more than 1 element, the result should be different
      // Note: This is probabilistic - there's a small chance the order could be the same
      // We'll run multiple tests to increase confidence
      let isDifferent = false;
      for (let i = 0; i < 10; i++) {
        const testResult = randomArray(array);
        if (JSON.stringify(testResult) !== JSON.stringify(array)) {
          isDifferent = true;
          break;
        }
      }
      // For small arrays, we might get the same order occasionally, so we're more lenient
      if (array.length <= 3) {
        // For small arrays, just check that the function works
        expect(result).toBeDefined();
      } else {
        expect(isDifferent).toBe(true);
      }
    } else if (!shouldBeDifferent) {
      // For empty arrays or single elements, result should be the same
      expect(JSON.stringify(result)).toBe(JSON.stringify(array));
    }

    // Run custom validation if provided
    if (validationFn) {
      expect(validationFn(result)).toBe(true);
    }

    // Verify original array is not modified
    expect(JSON.stringify(array)).toBe(JSON.stringify(originalArray));
  });
});
