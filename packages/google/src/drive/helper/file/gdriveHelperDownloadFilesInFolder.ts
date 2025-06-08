import {MimeType} from '@coolcolduk/enum';
import {MaybeArray} from '@coolcolduk/typescript-util';
import {GDriveContent} from '../../../types/GDriveContent';
import {listGDriveContent} from '../../content/listGDriveContent';
import {gdriveHelperDownloadFiles} from './gdriveHelperDownloadFiles';

/**
 * Downloads all files in a Google Drive folder
 * @param apiKey Google Drive API key
 * @param folderId Google Drive folder ID
 * @param mimeTypes Optional array of MIME types to filter files by
 * @param contentFilter Optional function to filter files by
 * @returns Promise resolving to an array of File objects
 */
export async function gdriveHelperDownloadFilesInFolder(
  apiKey: string,
  folderId: string,
  mimeTypes?: MaybeArray<MimeType>,
  contentFilter?: (d: GDriveContent) => boolean,
): Promise<File[]> {
  const listFilesFolders = (await listGDriveContent(apiKey, folderId, {mimeTypes})).data;

  const filteredFiles = contentFilter ? listFilesFolders.files.filter(contentFilter) : listFilesFolders.files;
  if (filteredFiles.length === 0) return [];

  return gdriveHelperDownloadFiles(apiKey, filteredFiles);
}
