import {removeDuplicateCaseInsensitive} from './removeDuplicateCaseInsensitive';

interface TestCase {
  data: string[];
  result: string[];
}

describe('removeDuplicateCaseInsensitive', () => {
  const testCases: Record<string, TestCase> = {
    'Should remove duplicates case insensitively': {
      data: ['One', 'two', 'Three', 'two', 'ONE', 'three', 'Four', 'four'],
      result: ['One', 'two', 'Three', 'Four'],
    },
    'Should handle an empty array': {
      data: [],
      result: [],
    },
    'Should handle single item array': {
      data: ['one'],
      result: ['one'],
    },
    'Should remove all duplicates if all items are case variants': {
      data: ['a', 'A', 'a', 'A'],
      result: ['a'],
    },
    'Should not modify array with no duplicates': {
      data: ['A', 'B', 'C'],
      result: ['A', 'B', 'C'],
    },
  };

  it.each(Object.entries(testCases))('%s', (_title, testcase) => {
    const {data, result} = testcase;
    expect(removeDuplicateCaseInsensitive(data)).toStrictEqual(result);
  });
});
