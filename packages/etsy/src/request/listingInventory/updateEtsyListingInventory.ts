import axios from 'axios';
import {
  EtsyListingInventory,
  UpdateEtsyListingInventoryRequest,
  zUpdateEtsyListingInventoryRequestSchema,
} from '../../interfaces/EtsyListingInventory';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Updates the inventory for a listing identified by a listing ID.
 * @see https://developers.etsy.com/documentation/reference/#operation/updateListingInventory
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The ID of the listing to update (required, integer >= 1).
 * @param updateData - The data to update the listing inventory with.
 * @returns The updated inventory details for the listing.
 */
export async function updateEtsyListingInventory(
  apiKey: string,
  accessToken: string,
  listingId: number,
  updateData: UpdateEtsyListingInventoryRequest,
): EtsyResponse<EtsyListingInventory> {
  const body = zUpdateEtsyListingInventoryRequestSchema.strip().parse(updateData);
  return axios.put<EtsyListingInventory>(
    `/application/listings/${listingId}/inventory`,
    body,
    getEtsyRequestAxiosConfig({accessToken, apiKey, contentType: 'application/json'}),
  );
}
