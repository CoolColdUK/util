import {extractFilenameFromHeader} from './extractFilenameFromHeader';

describe('extractFilenameFromHeader', () => {
  it('returns filename when content-disposition has filename=', () => {
    expect(extractFilenameFromHeader({'content-disposition': 'attachment; filename=report.pdf'})).toBe('report.pdf');
  });

  it('returns undefined when content-disposition is missing', () => {
    expect(extractFilenameFromHeader({})).toBeUndefined();
  });

  it('returns undefined when content-disposition is not a string', () => {
    expect(extractFilenameFromHeader({'content-disposition': ['attachment'] as unknown as string})).toBeUndefined();
  });

  it('returns part after filename= when value is quoted', () => {
    expect(extractFilenameFromHeader({'content-disposition': 'attachment; filename="report.pdf"'})).toBe(
      '"report.pdf"',
    );
  });
});
