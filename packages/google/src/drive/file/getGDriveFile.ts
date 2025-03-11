import {getGDriveAxios} from '../../util/axios/getGDriveAxios';

/**
 * Fetches a Google Drive file's content as an ArrayBuffer
 * @param apiKey Google Drive API key
 * @param fileId ID of the file to fetch
 * @returns Promise resolving to the Axios response with file content
 */
export function getGDriveFile(apiKey: string, fileId: string) {
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  // Fetch the file from Google Drive
  return getGDriveAxios(apiKey).get(downloadUrl, {
    responseType: 'arraybuffer',
  });
}
