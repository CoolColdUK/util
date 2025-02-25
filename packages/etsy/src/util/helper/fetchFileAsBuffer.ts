import axios from 'axios';

/**
 * Fetch a file from url and return as buffer
 * @param url
 * @returns
 */
export async function fetchFileAsBuffer(url: string): Promise<{
  buffer: Buffer;
  type: string;
}> {
  const response = await axios.get(url, {responseType: 'arraybuffer'});
  return {buffer: Buffer.from(response.data), type: response.headers['content-type'] || 'image/jpeg'};
}
