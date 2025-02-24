import axios from 'axios';

/**
 * Download file from link and return file object
 * @param url
 * @param filename
 * @param type
 * @returns
 */
export async function getFile(url: string, filename: string, type?: string) {
  const response = await axios.get(url, {responseType: 'arraybuffer'});
  return new File([Buffer.from(response.data)], filename, {type});
}
