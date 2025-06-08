import {mapPromiseFnSeries} from '@coolcolduk/util';
import {GDriveContent} from '../../../types/GDriveContent';
import {gdriveHelperDownloadFile} from './gdriveHelperDownloadFile';

/**
 * Downloads multiple Google Drive file
 * @param apiKey Google Drive API key
 * @param content gdrive content array
 * @returns Promise resolving to a File object with the correct MIME type
 */
export async function gdriveHelperDownloadFiles(apiKey: string, content: GDriveContent[]): Promise<File[]> {
  // Create and return a File object (browser-compatible)
  return mapPromiseFnSeries(content, (c) => gdriveHelperDownloadFile(apiKey, c));
}
