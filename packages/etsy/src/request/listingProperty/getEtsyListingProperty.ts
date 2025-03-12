import {EtsyListingProperty} from '../../interfaces/EtsyListingProperty';
import {EtsyList, EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves all properties of a listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/getListingProperties
 * @param apiKey - The API key.
 * @param shopId - The ID of the shop (required, integer >= 1).
 * @param listingId - The ID of the listing to retrieve properties for (required, integer >= 1).
 * @returns A list of properties associated with the listing.
 */
export async function getEtsyListingProperties(
  apiKey: string,
  shopId: number,
  listingId: number,
): EtsyResponse<EtsyList<EtsyListingProperty>> {
  return getEtsyAxios(apiKey).get<EtsyList<EtsyListingProperty>>(
    `/application/shops/${shopId}/listings/${listingId}/properties`,
  );
}
