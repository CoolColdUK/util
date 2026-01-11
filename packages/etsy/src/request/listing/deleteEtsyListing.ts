import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Deletes a specific Etsy listing.
 * @see https://developers.etsy.com/documentation/reference#operation/deleteListing
 * @requires scope listings_d
 * @param apiKey - The API key.
 * @param secret - The API secret.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The ID of the listing to delete.
 * @returns True if the deletion was successful (HTTP 204), false otherwise.
 */
export function deleteEtsyListing(
  apiKey: string,
  secret: string,
  accessToken: string,
  listingId: number,
): EtsyResponse<undefined> {
  return getEtsyAxios(apiKey, secret, accessToken).delete(`/application/listings/${listingId}`);
}
