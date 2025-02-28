import axios from 'axios';
import {EtsyListingProperty} from '../../interfaces/EtsyListingProperty';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Retrieves a listing's property.
 * @see https://developers.etsy.com/documentation/reference/#operation/getListingProperty
 * @deprecated Development for this endpoint is in progress. It will only return a 501 response.
 * @param apiKey - The API key.
 * @param listingId - The ID of the listing associated with the property (required, integer >= 1).
 * @param propertyId - The ID of the listing property to retrieve (required, integer >= 1).
 * @returns The details of the specified listing property.
 */
export async function getEtsyListingProperty(
  apiKey: string,
  listingId: number,
  propertyId: number,
): EtsyResponse<EtsyListingProperty> {
  return axios.get<EtsyListingProperty>(
    `/application/listings/${listingId}/properties/${propertyId}`,
    getEtsyRequestAxiosConfig({apiKey}),
  );
}
