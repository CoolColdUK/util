import {EtsyListingVideo} from '../../interfaces';
import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves all videos associated with an Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/getListingVideos
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The numeric ID of the listing to retrieve videos for (required, integer >= 1).
 * @returns The response containing an array of video details for the listing.
 * @throws {Error} If listingId is not a positive integer.
 */
export function getEtsyListingVideos(
  apiKey: string,
  accessToken: string,
  listingId: number, // Required path parameter, integer >= 1
): EtsyResponseMany<EtsyListingVideo> {
  // Validate listingId
  if (!Number.isInteger(listingId) || listingId < 1) {
    throw new Error('listingId must be an integer >= 1');
  }

  // Make the API request without query parameters
  return getEtsyAxios(apiKey, accessToken).get<EtsyList<EtsyListingVideo>>(`/application/listings/${listingId}/videos`);
}
