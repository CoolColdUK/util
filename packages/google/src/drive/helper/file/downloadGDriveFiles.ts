import {mapPromiseFnSeries} from '@coolcolduk/util';
import {GDriveContent} from '../../../types/GDriveContent';
import {downloadGDriveFile} from './downloadGDriveFile';

/**
 * Downloads multiple Google Drive file
 * @param apiKey Google Drive API key
 * @param content gdrive content array
 * @returns Promise resolving to a File object with the correct MIME type
 */
export async function downloadGDriveFiles(apiKey: string, content: GDriveContent[]) {
  // Create and return a File object (browser-compatible)
  return mapPromiseFnSeries(content, (c) => downloadGDriveFile(apiKey, c));
}
