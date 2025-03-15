import {fetchFileAsBuffer} from './fetchFileAsBuffer';

/**
 * Download file from link and return file object
 * @param url
 * @param filename
 * @param overrideType
 * @returns
 */
export async function fetchFile(url: string, filename: string, overrideType?: string): Promise<File> {
  const data = await fetchFileAsBuffer(url);
  return new File([data.buffer], filename, {type: overrideType || data.type});
}
