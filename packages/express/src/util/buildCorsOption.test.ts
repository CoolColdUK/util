import {ExpressMethod} from '../enum/ExpressMethod';
import {buildCorsOption} from './buildCorsOption';

describe('buildCorsOption', () => {
  it('returns object with origin, methods, and optionsSuccessStatus 200', () => {
    const result = buildCorsOption('https://example.com', ExpressMethod.GET);
    expect(result.origin).toBe('https://example.com');
    expect(result.methods).toBe(ExpressMethod.GET);
    expect(result.optionsSuccessStatus).toBe(200);
  });

  it('merges additional options', () => {
    const result = buildCorsOption(undefined, undefined, {credentials: true});
    expect(result.credentials).toBe(true);
    expect(result.optionsSuccessStatus).toBe(200);
  });
});
