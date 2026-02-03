import {fetchFile} from './fetchFile';
import {fetchFileAsBuffer} from './fetchFileAsBuffer';

jest.mock('./fetchFileAsBuffer');

const mockedFetchFileAsBuffer = fetchFileAsBuffer as jest.MockedFunction<typeof fetchFileAsBuffer>;

describe('fetchFile', () => {
  it('returns File with buffer and optional type override', async () => {
    const buffer = Buffer.from([1, 2, 3]);
    mockedFetchFileAsBuffer.mockResolvedValueOnce({
      buffer,
      type: 'image/png',
      filename: 'image.png',
    });

    const result = await fetchFile('https://example.com/image.png', 'downloaded.png');

    expect(mockedFetchFileAsBuffer).toHaveBeenCalledWith('https://example.com/image.png');
    expect(result).toBeInstanceOf(File);
    expect(result.name).toBe('downloaded.png');
    expect(result.type).toBe('image/png');
    expect(result.size).toBe(3);
  });

  it('uses overrideType when provided', async () => {
    mockedFetchFileAsBuffer.mockResolvedValueOnce({
      buffer: Buffer.from([]),
      type: 'image/jpeg',
      filename: undefined,
    });

    const result = await fetchFile('https://example.com/x', 'a.bin', 'application/octet-stream');

    expect(result.type).toBe('application/octet-stream');
  });
});
