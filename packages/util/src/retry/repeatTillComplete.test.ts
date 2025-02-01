import {generateTestEach} from '../testHelper/generateTestEach';
import {repeatTillComplete} from './repeatTillComplete';

interface ITestData {
  fetchFunction: (prev?: number) => Promise<number>;
  isComplete: (data: number) => boolean;
  shouldRetry: (count: number, data?: number) => boolean;
  delayMs: number;
  result: number | Error;
}

describe('repeatTillComplete', () => {
  const testCases: Record<string, ITestData> = {
    'Should return immediately if first fetch is complete': {
      fetchFunction: async () => 10,
      isComplete: (data) => data === 10,
      shouldRetry: () => true,
      delayMs: 100,
      result: 10,
    },

    'Should retry until condition is met': {
      fetchFunction: async (prev = 0) => prev + 2,
      isComplete: (data) => data >= 6,
      shouldRetry: (count) => count < 5,
      delayMs: 100,
      result: 6,
    },

    'Should stop retrying when max retries reached': {
      fetchFunction: async (prev = 0) => prev + 1,
      isComplete: (data) => data >= 10,
      shouldRetry: (count) => count < 3, // Will stop at 3 retries
      delayMs: 100,
      result: new Error('Max retries reached without completing the fetch.'),
    },
  };

  generateTestEach(testCases, async (_title, input) => {
    const {fetchFunction, isComplete, shouldRetry, delayMs, result} = input as ITestData;

    if (result instanceof Error) {
      await expect(repeatTillComplete(fetchFunction, isComplete, shouldRetry, delayMs)).rejects.toThrow(result.message);
    } else {
      await expect(repeatTillComplete(fetchFunction, isComplete, shouldRetry, delayMs)).resolves.toEqual(result);
    }
  });
});
