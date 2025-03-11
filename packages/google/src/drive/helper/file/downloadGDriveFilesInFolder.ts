import {MimeType} from '@coolcolduk/enum';
import {MaybeArray} from '@coolcolduk/typescript-util';
import {GDriveContent} from '../../../types/GDriveContent';
import {listGDriveContent} from '../../content/listGDriveContent';
import {downloadGDriveFiles} from './downloadGDriveFiles';

export async function downloadGDriveFilesInFolder(
  apiKey: string,
  folderId: string,
  mimeTypes?: MaybeArray<MimeType>,
  contentFilter?: (d: GDriveContent) => boolean,
): Promise<File[]> {
  const listFilesFolders = (await listGDriveContent(apiKey, folderId, {mimeTypes})).data;

  const filteredFiles = contentFilter ? listFilesFolders.files.filter(contentFilter) : listFilesFolders.files;
  if (filteredFiles.length === 0) return [];

  return downloadGDriveFiles(apiKey, filteredFiles);
}
