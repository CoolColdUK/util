import axios from 'axios';
import FormData from 'form-data';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {UploadEtsyListingFileResponse} from '../../interfaces/UploadEtsyListingFile';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Uploads a file to an existing Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/uploadListingFile
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param shopId - The ID of the shop.
 * @param listingId - The ID of the listing to upload the file to.
 * @param file - the file object
 * @returns The response containing details of the uploaded file.
 */
export function uploadEtsyListingFile(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  file: File,
): EtsyResponse<UploadEtsyListingFileResponse> {
  // Prepare FormData for multipart upload (browser-native FormData)
  const formData = new FormData();
  formData.append('file', file); // File object from browser (e.g., from <input type="file">)
  formData.append('name', file.name); // Optional: Etsy uses this as the display name

  // Make the API request
  return axios.post<UploadEtsyListingFileResponse>(
    `/application/shops/${shopId}/listings/${listingId}/files`,
    formData,
    getEtsyRequestAxiosConfig({accessToken, apiKey, contentType: 'multipart/form-data'}),
  );
}
