import {get} from 'lodash';

export function extractGDriveFolderIdFromUrl(url: string): string | undefined {
  const match = url.match(/folders\/([a-zA-Z0-9_-]+)/);
  return get(match, '1', undefined);
}
