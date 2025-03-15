import {MimeType} from '@coolcolduk/enum';
import axios from 'axios';
import {extractFilenameFromHeader} from './extract/extractFilenameFromHeader';
import {extractMimeTypeFromHeader} from './extract/extractMimeTypeFromHeader';

/**
 * Fetch a file from url and return as buffer
 * @param url
 * @returns
 */
export async function fetchFileAsBuffer(url: string): Promise<{
  buffer: Buffer;
  type: MimeType | string | undefined;
  filename: string | undefined;
}> {
  const response = await axios.get(url, {responseType: 'arraybuffer'});
  return {
    buffer: Buffer.from(response.data),
    type: extractMimeTypeFromHeader(response.headers) || response.headers['content-type'],
    filename: extractFilenameFromHeader(response.headers),
  };
}
