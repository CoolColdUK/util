import {MimeType} from '@coolcolduk/enum';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {UploadEtsyListingImageRequest, UploadEtsyListingImageResponse} from '../../interfaces/UploadEtsyListingImage';
import {buildFormData} from '../../util/builder/buildFormData';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Uploads an image to an existing Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/uploadListingImage
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param shopId - The ID of the shop.
 * @param listingId - The ID of the listing to upload the image to.
 * @param data - Data for the request, including the image file and optional fields.
 * @returns The response containing details of the uploaded image.
 */
export function uploadEtsyListingImage(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  data: UploadEtsyListingImageRequest,
): EtsyResponse<UploadEtsyListingImageResponse> {
  // Prepare FormData for multipart upload (browser-native FormData)
  const formData = buildFormData(data);

  // Make the API request
  return getEtsyAxios(apiKey, accessToken, {
    contentType: MimeType.MULTIPART_FORM_DATA,
  }).post<UploadEtsyListingImageResponse>(`/application/shops/${shopId}/listings/${listingId}/images`, formData);
}
