import {MimeType} from '@coolcolduk/enum';
import {extractMimeTypeFromHeader} from './extractMimeTypeFromHeader';

describe('extractMimeTypeFromHeader', () => {
  it('returns MimeType when content-type matches enum', () => {
    expect(extractMimeTypeFromHeader({'content-type': 'image/png'})).toBe(MimeType.IMAGE_PNG);
    expect(extractMimeTypeFromHeader({'content-type': 'application/json'})).toBe(MimeType.APPLICATION_JSON);
  });

  it('strips charset and returns enum value', () => {
    expect(extractMimeTypeFromHeader({'content-type': 'image/png; charset=utf-8'})).toBe(MimeType.IMAGE_PNG);
  });

  it('returns undefined when content-type is missing', () => {
    expect(extractMimeTypeFromHeader({})).toBeUndefined();
  });

  it('returns undefined when content-type is not a string', () => {
    expect(extractMimeTypeFromHeader({'content-type': ['text/plain'] as unknown as string})).toBeUndefined();
  });

  it('returns undefined when content-type does not match enum', () => {
    expect(extractMimeTypeFromHeader({'content-type': 'application/unknown'})).toBeUndefined();
  });
});
