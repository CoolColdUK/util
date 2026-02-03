import {MimeType} from '@coolcolduk/enum';
import axios from 'axios';
import {fetchFileAsBuffer} from './fetchFileAsBuffer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchFileAsBuffer', () => {
  it('returns buffer, type, and filename from response', async () => {
    const buffer = new ArrayBuffer(8);
    mockedAxios.get.mockResolvedValueOnce({
      data: buffer,
      headers: {
        'content-type': 'image/png',
        'content-disposition': 'attachment; filename=image.png',
      },
    });

    const result = await fetchFileAsBuffer('https://example.com/image.png');

    expect(mockedAxios.get).toHaveBeenCalledWith('https://example.com/image.png', {responseType: 'arraybuffer'});
    expect(Buffer.isBuffer(result.buffer)).toBe(true);
    expect(result.buffer.length).toBe(8);
    expect(result.type).toBe(MimeType.IMAGE_PNG);
    expect(result.filename).toBe('image.png');
  });

  it('uses content-type header when mime type not in enum', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: new ArrayBuffer(0),
      headers: {'content-type': 'application/x-custom'},
    });

    const result = await fetchFileAsBuffer('https://example.com/file');

    expect(result.type).toBe('application/x-custom');
    expect(result.filename).toBeUndefined();
  });
});
