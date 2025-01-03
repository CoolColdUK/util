import {buildUrlQuery} from './buildUrlQuery';

interface ITestData {
  url: string;
  query: Record<string, string>;
  result: string;
}

describe('buildUrlQuery', () => {
  const testCases: Record<string, ITestData> = {
    'Should give just url': {
      url: 'http://localhost',
      query: {},
      result: 'http://localhost',
    },
    'Should give url with query': {
      url: 'http://localhost',
      query: {a: 'f', b: 'test'},
      result: 'http://localhost?a=f&b=test',
    },
  };

  test.each(Object.keys(testCases).map((tc) => [tc, testCases[tc]]))('%s', (_title, input) => {
    const {url, query, result} = input as ITestData;
    expect(buildUrlQuery(url, query)).toBe(result);
  });
});