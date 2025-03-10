import {GDriveContent} from '../types/GDriveContent';
import {GDriveResponse} from '../types/GDriveResponse';
import {getGDriveAxios} from '../util/axios/getGDriveAxios';

// Input parameters for getting Google Drive content
export interface ListGDriveContentParam {
  /** The ID of the folder to list files from */
  id: string;

  /** Number of results per page (default: 1000) */
  pageSize?: number;

  /** Token for paginated results (optional) */
  pageToken?: string;

  /** Whether to include trashed files (default: true, set to false to exclude trashed files) */
  trashed?: boolean;
}

export interface ListGDriveContentResponse {
  files: GDriveContent[];
}

/**
 * Lists files in a Google Drive folder
 * @param apiKey
 * @param params Parameters for listing files
 * @returns Promise resolving to the list of files
 * Note: This method returns all files by default, including trashed files. If you don't want trashed files to appear in the list, use the trashed=false query parameter to remove trashed files from the results.
 */
export function listGDriveContent(
  apiKey: string,
  params: ListGDriveContentParam,
): GDriveResponse<ListGDriveContentResponse> {
  const {
    id,
    pageSize = 1000,
    pageToken,
    trashed = true, // Default to true to match API default behavior
  } = params;

  return getGDriveAxios(apiKey).get('/files', {
    params: {
      q: `'${id}' in parents`,
      fields: 'files(id,name,mimeType,webViewLink),nextPageToken',
      pageSize,
      pageToken,
      trashed: trashed === false ? false : undefined, // Only include if false to filter out trashed files
    },
  });
}
