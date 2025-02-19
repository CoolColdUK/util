import {generateTestEach} from '../testHelper/generateTestEach';
import {mapEnumValueToEnumKey} from './mapEnumValueToEnumKey';

enum Color {
  GREEN = 'g',
  RED = 'r',
  BLUE = 'b',
  YELLOW = 1,
}

interface ITestCase {
  data: string | number;
  expected: string | undefined;
}

describe('mapEnumValueToEnumKey', () => {
  const testCases: Record<string, ITestCase> = {
    'Should return key for string value': {
      data: 'g',
      expected: 'GREEN',
    },
    'Should return key for another string value': {
      data: 'r',
      expected: 'RED',
    },
    'Should return key for numeric value': {
      data: 1,
      expected: 'YELLOW',
    },
    'Should return undefined for non-existent value': {
      data: 'x',
      expected: undefined,
    },
    'Should return undefined for non-existent number': {
      data: 999,
      expected: undefined,
    },
  };

  generateTestEach(testCases, (_title, param) => {
    const {data, expected} = param as ITestCase;
    expect(mapEnumValueToEnumKey(Color, data)).toStrictEqual(expected);
  });
});
