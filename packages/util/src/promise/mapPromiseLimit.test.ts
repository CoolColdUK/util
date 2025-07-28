import {generateTestEach} from '../testHelper/generateTestEach';
import {mapPromiseLimit} from './mapPromiseLimit';

interface ITestData {
  items: number[];
  concurrency: number;
  mapper: (item: number, index: number) => Promise<number>;
  expected: number[];
  shouldThrow?: boolean;
  maxTime?: number; // Maximum expected time in milliseconds
}

describe('mapPromiseLimit', () => {
  const testCases: Record<string, ITestData> = {
    'Should process items with concurrency limit 1': {
      items: [1, 2, 3, 4, 5],
      concurrency: 1,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [2, 4, 6, 8, 10],
      maxTime: 80, // 5 items * 10ms each = 50ms, but sequential so ~60ms + buffer
    },

    'Should process items with concurrency limit 2': {
      items: [1, 2, 3, 4, 5],
      concurrency: 2,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [2, 4, 6, 8, 10],
      maxTime: 60, // 5 items with concurrency 2 = ~40ms + buffer
    },

    'Should process items with concurrency limit equal to array length': {
      items: [1, 2, 3],
      concurrency: 3,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [2, 4, 6],
      maxTime: 30, // 3 items with concurrency 3 = ~20ms + buffer
    },

    'Should process items with concurrency limit greater than array length': {
      items: [1, 2, 3],
      concurrency: 5,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [2, 4, 6],
      maxTime: 30, // 3 items with concurrency 5 = ~20ms + buffer
    },

    'Should handle empty array': {
      items: [],
      concurrency: 3,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [],
      maxTime: 20, // Should be very fast
    },

    'Should preserve order of results': {
      items: [3, 1, 4, 1, 5],
      concurrency: 2,
      mapper: async (item: number, index: number) => {
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 50));
        return item + index;
      },
      expected: [3, 2, 6, 4, 9], // [3+0, 1+1, 4+2, 1+3, 5+4]
      maxTime: 300, // Random delays up to 50ms each + buffer
    },

    'Should handle mapper that uses index': {
      items: [10, 20, 30],
      concurrency: 2,
      mapper: async (item: number, index: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item + index;
      },
      expected: [10, 21, 32], // [10+0, 20+1, 30+2]
      maxTime: 40, // 3 items with concurrency 2 = ~30ms + buffer
    },

    'Should handle synchronous mapper': {
      items: [1, 2, 3, 4, 5],
      concurrency: 3,
      mapper: async (item: number) => item * 2,
      expected: [2, 4, 6, 8, 10],
      maxTime: 20, // Should be very fast
    },

    'Should handle concurrency limit of 0': {
      items: [1, 2, 3],
      concurrency: 0,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [2, 4, 6],
      maxTime: 60, // 3 items * 10ms each = 30ms, but sequential so ~50ms + buffer
    },

    'Should handle negative concurrency limit': {
      items: [1, 2, 3],
      concurrency: -1,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [2, 4, 6],
      maxTime: 60, // 3 items * 10ms each = 30ms, but sequential so ~50ms + buffer
    },

    'Should handle single item array': {
      items: [42],
      concurrency: 3,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return item * 2;
      },
      expected: [84],
      maxTime: 30, // Single item should be fast
    },

    'Should handle large array with small concurrency': {
      items: Array.from({length: 10}, (_, i) => i + 1),
      concurrency: 2,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 5));
        return item * 2;
      },
      expected: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      maxTime: 45, // 10 items with concurrency 2 = ~35ms + buffer
    },

    'Should validate concurrency with timing - 10 items, concurrency 10': {
      items: Array.from({length: 10}, (_, i) => i + 1),
      concurrency: 10,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 20));
        return item * 2;
      },
      expected: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      maxTime: 40, // 10 items with concurrency 10 = ~30ms + buffer
    },

    'Should validate concurrency with timing - 10 items, concurrency 5': {
      items: Array.from({length: 10}, (_, i) => i + 1),
      concurrency: 5,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 20));
        return item * 2;
      },
      expected: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      maxTime: 60, // 10 items with concurrency 5 = ~50ms + buffer
    },

    'Should handle mapper that throws error': {
      items: [1, 2, 3],
      concurrency: 2,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        if (item === 2) {
          throw new Error('Test error');
        }
        return item * 2;
      },
      expected: [2, 4, 6],
      shouldThrow: true,
    },

    'Should handle mapper that throws error on first item': {
      items: [1, 2, 3],
      concurrency: 2,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        if (item === 1) {
          throw new Error('First item error');
        }
        return item * 2;
      },
      expected: [2, 4, 6],
      shouldThrow: true,
    },

    'Should handle mapper that throws error on last item': {
      items: [1, 2, 3],
      concurrency: 2,
      mapper: async (item: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        if (item === 3) {
          throw new Error('Last item error');
        }
        return item * 2;
      },
      expected: [2, 4, 6],
      shouldThrow: true,
    },

    'Should handle complex async operations': {
      items: [1, 2, 3, 4, 5],
      concurrency: 3,
      mapper: async (item: number, index: number) => {
        // Simulate complex async operation
        await new Promise((resolve) => setTimeout(resolve, 20));
        const doubled = item * 2;
        await new Promise((resolve) => setTimeout(resolve, 10));
        return doubled + index;
      },
      expected: [2, 5, 8, 11, 14], // [1*2+0, 2*2+1, 3*2+2, 4*2+3, 5*2+4]
      maxTime: 80, // Complex operations with concurrency 3 + buffer
    },

    'Should handle varying processing times': {
      items: [1, 2, 3, 4, 5],
      concurrency: 2,
      mapper: async (item: number) => {
        // Items with even values take longer
        const delay = item % 2 === 0 ? 50 : 10;
        await new Promise((resolve) => setTimeout(resolve, delay));
        return item * 2;
      },
      expected: [2, 4, 6, 8, 10],
      maxTime: 150, // Varying delays with concurrency 2 + buffer
    },
  };

  generateTestEach(testCases, (_title, input) => {
    const {items, concurrency, mapper, expected, shouldThrow, maxTime} = input as ITestData;

    if (shouldThrow) {
      return expect(async () => {
        await mapPromiseLimit(items, concurrency, mapper);
      }).rejects.toThrow();
    } else {
      return new Promise<void>((resolve, reject) => {
        const startTime = Date.now();

        mapPromiseLimit(items, concurrency, mapper)
          .then((result) => {
            const endTime = Date.now();
            const executionTime = endTime - startTime;

            // Check results
            expect(result).toEqual(expected);

            // Check timing if maxTime is specified
            if (maxTime !== undefined) {
              expect(executionTime).toBeLessThan(maxTime);
            }

            resolve();
          })
          .catch(reject);
      });
    }
  });
});
