import {extractGDriveContentIdFromUrl, isGDriveSharedLink} from '../../../util';
import {getGDriveContent} from '../../content/getGDriveContent';
import {gdriveHelperDownloadFile} from './gdriveHelperDownloadFile';

/**
 * Downloads a Google Drive file from a shared link
 * @param apiKey Google Drive API key
 * @param downloadUrl Google Drive shared link
 * @returns Promise resolving to a File object with the correct MIME type
 */
export async function gdriveHelperDownloadFileWithUrl(apiKey: string, downloadUrl: string): Promise<File> {
  if (!isGDriveSharedLink(downloadUrl)) {
    throw new Error('Invalid Google Drive shared link');
  }
  const contentId = extractGDriveContentIdFromUrl(downloadUrl);
  if (!contentId) {
    throw new Error('Cannot extract content id');
  }

  const content = await getGDriveContent(apiKey, contentId);

  return gdriveHelperDownloadFile(apiKey, content.data);
}
