import {generateTestEach} from '../testHelper/generateTestEach';
import {mapStringToEnumValue} from './mapStringToEnumValue';

enum Color {
  GREEN = 'g',
  RED = 'r',
  BLUE = 'b',
  YELLOW = 1,
}

interface ITestCase {
  data: string | number;
  expected: Color | undefined;
}

describe('mapStringToEnumValue', () => {
  const testCases: Record<string, ITestCase> = {
    'basic string data': {
      data: 'g',
      expected: Color.GREEN,
    },
    'Should work number key': {
      data: 1,
      expected: Color.YELLOW,
    },
    'Should give undefined': {
      data: 3,
      expected: undefined,
    },
  };

  generateTestEach(testCases, (_title, param) => {
    const {data, expected} = param as ITestCase;
    // console.log(Color, typeof Color.BLUE, typeof Color);
    expect(mapStringToEnumValue(Color, data)).toStrictEqual(expected);
  });
});
