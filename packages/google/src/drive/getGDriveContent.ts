import {getGDriveAxios} from '../util/axios/getGDriveAxios';
import {GDriveContent} from './GDriveContent';
import {GDriveResponse} from './GDriveResponse';

export interface GetGDriveContentParam {
  /** The ID of the Google Drive item (file or folder) to retrieve */
  id: string;
}

/**
 * Retrieves metadata for a Google Drive item (file or folder)
 * @param apiKey The Google Drive API key
 * @param params Parameters for retrieving the item
 * @returns Promise resolving to the item's metadata
 * Note: This method returns all files by default, including trashed files. If you don't want trashed files to appear in the list, use the trashed=false query parameter to remove trashed files from the results.
 */
export function getGDriveContent(apiKey: string, params: GetGDriveContentParam): GDriveResponse<GDriveContent> {
  const {id} = params;

  return getGDriveAxios(apiKey).get(`/files/${id}`, {
    params: {
      fields: 'id,name,mimeType,webViewLink',
    },
  });
}
