import {fetchFileAsBuffer} from './fetchFileAsBuffer';

/**
 * Download file from link and return file object
 * @param url
 * @param filename
 * @param type
 * @returns
 */
export async function fetchFile(url: string, filename: string, type?: string) {
  return new File([await fetchFileAsBuffer(url)], filename, {type});
}
