import {fetchFileAsBuffer} from './fetchFileAsBuffer';

/**
 * Download file from link and return file object
 * @param url
 * @param filename
 * @returns
 */
export async function fetchFile(url: string, filename: string): Promise<File> {
  const data = await fetchFileAsBuffer(url);
  return new File([data.buffer], filename, {type: data.type});
}
