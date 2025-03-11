import {GDriveContent} from '../../../types/GDriveContent';
import {getGDriveFile} from '../../file/getGDriveFile';

/**
 * Downloads a Google Drive file
 * @param apiKey Google Drive API key
 * @param content gdrive content
 * @returns Promise resolving to a File object with the correct MIME type
 */
export async function downloadGDriveFile(apiKey: string, content: GDriveContent) {
  const response = await getGDriveFile(apiKey, content.id);

  const buffer = Buffer.from(response.data);

  // Create and return a File object (browser-compatible)
  return new File([buffer], content.name, {type: content.mimeType});
}
