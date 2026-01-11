import {EtsyListingInventory} from '../../interfaces/EtsyListingInventory';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves the inventory for a listing identified by a listing ID.
 * @see https://developers.etsy.com/documentation/reference/#operation/getListingInventory
 * @param apiKey - The API key.
 * @param secret - The API secret.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The ID of the listing to retrieve inventory for (required, integer >= 1).
 * @returns The inventory details for the specified listing.
 */
export async function getEtsyListingInventory(
  apiKey: string,
  secret: string,
  accessToken: string,
  listingId: number,
): EtsyResponse<EtsyListingInventory> {
  return getEtsyAxios(apiKey, secret, accessToken).get<EtsyListingInventory>(
    `/application/listings/${listingId}/inventory`,
  );
}
