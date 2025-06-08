import {get} from 'lodash';

/**
 * function to extract content id/file id from google drive url (e.g. https://drive.google.com/file/d/1234567890/view?usp=sharing)
 * @param url
 * @returns
 */
export function extractGDriveContentIdFromUrl(url: string): string | undefined {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return get(match, '1', undefined);
}
