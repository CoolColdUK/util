import {generateTestEach} from '../testHelper/generateTestEach';
import {indexOfCaseInsensitive} from './indexOfCaseInsensitive';

interface TestCase {
  searchElement: string;
  result: number;
}

describe('indexOfCaseInsensitive', () => {
  let data: string[];

  beforeEach(() => {
    data = ['One', 'two', 'Three', 'four', 'FIVE', 'six'];
  });

  const testCases: Record<string, TestCase> = {
    'Should find "one" case insensitively': {
      searchElement: 'one',
      result: 0,
    },
    'Should find "Two" case insensitively': {
      searchElement: 'Two',
      result: 1,
    },
    'Should find "three" case insensitively': {
      searchElement: 'three',
      result: 2,
    },
    'Should find "FOUR" case insensitively': {
      searchElement: 'FOUR',
      result: 3,
    },
    'Should find "five" case insensitively': {
      searchElement: 'five',
      result: 4,
    },
    'Should not find "seven"': {
      searchElement: 'seven',
      result: -1,
    },
    'Should not find empty string': {
      searchElement: '',
      result: -1,
    },
  };

  generateTestEach(testCases, (_title, testcase) => {
    const {searchElement, result} = testcase;
    expect(indexOfCaseInsensitive(data, searchElement)).toBe(result);
  });
});
