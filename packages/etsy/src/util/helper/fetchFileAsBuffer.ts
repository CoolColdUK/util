import axios from 'axios';

/**
 * Fetch a file from url and return as buffer
 * @param url
 * @returns
 */
export async function fetchFileAsBuffer(url: string) {
  const response = await axios.get(url, {responseType: 'arraybuffer'});
  return Buffer.from(response.data);
}
