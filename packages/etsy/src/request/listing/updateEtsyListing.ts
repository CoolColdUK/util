import axios from 'axios';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {UpdatedEtsyListing, UpdateEtsyListingRequest} from '../../interfaces/UpdatedEtsyListing';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Updates a specific Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/updateListing
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param shopId - The ID of the shop.
 * @param listingId - The ID of the listing to update.
 * @param updateData - The data to update the listing with.
 * @returns The updated listing details.
 */
export async function updateEtsyListing(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  updateData: UpdateEtsyListingRequest,
): EtsyResponse<UpdatedEtsyListing> {
  return axios.patch<UpdatedEtsyListing>(
    `/application/shops/${shopId}/listings/${listingId}`,
    updateData,
    getEtsyRequestAxiosConfig({accessToken, apiKey}),
  );
}
