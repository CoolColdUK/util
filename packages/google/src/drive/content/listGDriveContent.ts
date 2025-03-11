import {MimeType} from '@coolcolduk/enum';
import {MaybeArray} from '@coolcolduk/typescript-util';
import {castArray} from '@coolcolduk/util';
import {GDriveContent} from '../../types/GDriveContent';
import {GDriveResponse} from '../../types/GDriveResponse';
import {getGDriveAxios} from '../../util/axios/getGDriveAxios';

// Input parameters for getting Google Drive content
export interface ListGDriveContentParam {
  /** Number of results per page (default: 1000) */
  pageSize?: number;

  /** Token for paginated results (optional) */
  pageToken?: string;

  /** Whether to include trashed files (default: true, set to false to exclude trashed files) */
  trashed?: boolean;

  /** Optional MIME type(s) to filter content (e.g., 'image/jpeg' or ['image/png', 'application/pdf']) */
  mimeTypes?: MaybeArray<MimeType>;
}

export interface ListGDriveContentResponse {
  files: GDriveContent[];
}

/**
 * Lists files in a Google Drive folder
 * @param apiKey
 * @param folderId The ID of the folder to list files from
 * @param params Parameters for listing files
 * @returns Promise resolving to the list of files
 * Note: This method returns all files by default, including trashed files. If you don't want trashed files to appear in the list, use the trashed=false query parameter to remove trashed files from the results.
 */
export function listGDriveContent(
  apiKey: string,
  folderId: string,
  params: ListGDriveContentParam = {},
): GDriveResponse<ListGDriveContentResponse> {
  const {
    pageSize = 1000,
    pageToken,
    trashed = true, // Default to true to match API default behavior
    mimeTypes,
  } = params;

  // Normalize mimeTypes to an array
  const mimeTypeArray = mimeTypes ? castArray(mimeTypes) : undefined;

  return getGDriveAxios(apiKey).get('/files', {
    params: {
      q: `'${folderId}' in parents`,
      fields: 'files(id,name,mimeType,webViewLink),nextPageToken',
      pageSize,
      pageToken,
      mimeType: mimeTypeArray ? mimeTypeArray : undefined,
      trashed: trashed === false ? false : undefined, // Only include if false to filter out trashed files
    },
    paramsSerializer: {
      indexes: null, // no brackets at all
    },
  });
}
