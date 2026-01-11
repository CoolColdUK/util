import {EtsyListingVideo} from '../../interfaces';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves a video associated with an Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/getListingVideos
 * @param apiKey - The API key.
 * @param secret - The API secret.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The numeric ID of the listing to retrieve videos for (required, integer >= 1).
 * @param videoId - The numeric ID of the video to retrieve (required, integer >= 1).
 * @returns The response containing an array of video details for the listing.
 * @throws {Error} If listingId is not a positive integer.
 */
export function getEtsyListingVideo(
  apiKey: string,
  secret: string,
  accessToken: string,
  listingId: number,
  videoId: number,
): EtsyResponse<EtsyListingVideo> {
  // Validate listingId
  if (!Number.isInteger(listingId) || listingId < 1) {
    throw new Error('listingId must be an integer >= 1');
  }

  if (!Number.isInteger(videoId) || videoId < 1) {
    throw new Error('videoId must be an integer >= 1');
  }

  // Make the API request without query parameters
  return getEtsyAxios(apiKey, secret, accessToken).get<EtsyListingVideo>(
    `/application/listings/${listingId}/videos/${videoId}`,
  );
}
