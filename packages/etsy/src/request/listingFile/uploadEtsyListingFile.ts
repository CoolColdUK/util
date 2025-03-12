import {MimeType} from '@coolcolduk/enum';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {UploadEtsyListingFileRequest, UploadEtsyListingFileResponse} from '../../interfaces/UploadEtsyListingFile';
import {buildFormData} from '../../util/builder/buildFormData';
import {formatListingFileName} from '../../util/format/formatListingFileName';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Uploads a file to an existing Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/uploadListingFile
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param shopId - The ID of the shop.
 * @param listingId - The ID of the listing to upload the file to.
 * @param data - data for request
 * @returns The response containing details of the uploaded file.
 */
export function uploadEtsyListingFile(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  data: UploadEtsyListingFileRequest,
): EtsyResponse<UploadEtsyListingFileResponse> {
  // Prepare FormData for multipart upload (browser-native FormData)
  const formData = buildFormData({
    ...data,
    ...(data.name ? {name: formatListingFileName(data.name)} : {}),
  });

  // Make the API request
  return getEtsyAxios(apiKey, accessToken, {
    contentType: MimeType.MULTIPART_FORM_DATA,
  }).post<UploadEtsyListingFileResponse>(`/application/shops/${shopId}/listings/${listingId}/files`, formData);
}
