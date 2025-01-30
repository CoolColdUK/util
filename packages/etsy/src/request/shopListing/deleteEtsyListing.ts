import axios from 'axios';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Deletes a specific Etsy listing.
 * @see https://developers.etsy.com/documentation/reference#operation/deleteListing
 * @requires scope listings_d
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The ID of the listing to delete.
 * @returns True if the deletion was successful (HTTP 204), false otherwise.
 */
export async function deleteEtsyListing(apiKey: string, accessToken: string, listingId: number): Promise<boolean> {
  return await axios.delete(`/application/listings/${listingId}`, getEtsyRequestAxiosConfig({accessToken, apiKey}));
}
