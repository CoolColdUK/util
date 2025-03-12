import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Deletes a specific Etsy listing.
 * @see https://developers.etsy.com/documentation/reference#operation/deleteListing
 * @requires scope listings_d
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The ID of the listing to delete.
 * @returns True if the deletion was successful (HTTP 204), false otherwise.
 */
export function deleteEtsyListing(apiKey: string, accessToken: string, listingId: number): EtsyResponse<undefined> {
  return getEtsyAxios(apiKey, accessToken).delete(`/application/listings/${listingId}`);
}
