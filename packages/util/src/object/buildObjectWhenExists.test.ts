import {buildObjectWhenExists} from './buildObjectWhenExists';

interface ITestData {
  key: string;
  value?: any;
  result: Record<string, any>;
}

describe('buildObjectWhenExists', () => {
  const testCases: Record<string, ITestData> = {
    'Should build object': {
      key: 'str',
      value: 0,
      result: {str: 0},
    },
    'Should return empty object': {
      key: 'str',
      result: {},
    },
  };

  test.each(Object.keys(testCases).map((tc) => [tc, testCases[tc]]))('%s', (_title, input) => {
    const {key, value, result} = input as ITestData;
    expect(buildObjectWhenExists(key, value)).toStrictEqual(result);
  });
});
