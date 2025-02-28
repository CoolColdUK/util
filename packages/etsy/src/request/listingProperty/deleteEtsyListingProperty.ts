import axios from 'axios';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Deletes a property for a Listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/deleteListingProperty
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param shopId - The ID of the shop.
 * @param listingId - The ID of the listing associated with the property.
 * @param propertyId - The ID of the listing property to delete.
 * @returns An empty response indicating successful deletion.
 */
export async function deleteEtsyListingProperty(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  propertyId: number,
): EtsyResponse<void> {
  return axios.delete<void>(
    `/application/shops/${shopId}/listings/${listingId}/properties/${propertyId}`,
    getEtsyRequestAxiosConfig({accessToken, apiKey}),
  );
}
