import {MaybePromise} from '@coolcolduk/typescript-util';

export function generateTestEach<T>(testCases: Record<string, T>, fn: (title: string, input: T) => MaybePromise<void>) {
  return test.each(Object.entries(testCases))('%s', fn);
}
