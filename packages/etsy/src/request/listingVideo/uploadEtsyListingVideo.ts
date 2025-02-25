import axios from 'axios';
import {EtsyListingVideo} from '../../interfaces/EtsyListingVideo';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {UploadEtsyListingVideoRequest} from '../../interfaces/UploadEtsyListingVideo';
import {buildFormData} from '../../util/builder/buildFormData';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Uploads a video to an existing Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/uploadListingVideo
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param shopId - The ID of the shop.
 * @param listingId - The ID of the listing to upload the video to.
 * @param data - Data for the request, including the video file and optional fields.
 * @returns The response containing details of the uploaded video.
 */
export function uploadEtsyListingVideo(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  data: UploadEtsyListingVideoRequest,
): EtsyResponse<EtsyListingVideo> {
  // Prepare FormData for multipart upload (browser-native FormData)
  const formData = buildFormData(data);

  // Make the API request
  return axios.post<EtsyListingVideo>(
    `/application/shops/${shopId}/listings/${listingId}/videos`,
    formData,
    getEtsyRequestAxiosConfig({accessToken, apiKey, contentType: 'multipart/form-data'}),
  );
}
