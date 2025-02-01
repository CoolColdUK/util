import axios from 'axios';
import {EtsyParamIncludesEnum} from '../../enum/EtsyParamIncludesEnum';
import {EtsyList, EtsyListing, EtsyResponseMany} from '../../interfaces';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Fetches multiple Etsy listings by their listing IDs.
 * @see https://developers.etsy.com/documentation/reference#operation/getListingsByListingIds
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param listingIds - An array of listing IDs to retrieve (max 100).
 * @param includes - Optional includes for additional data (e.g., "Images", "Shop").
 * @returns The details of the listings.
 */
export function getListingsByListingIds(
  apiKey: string,
  accessToken: string,
  listingIds: number[],
  includes: EtsyParamIncludesEnum[] = [],
): EtsyResponseMany<EtsyListing> {
  if (listingIds.length === 0) {
    throw new Error('At least one listing ID is required.');
  }
  if (listingIds.length > 100) {
    throw new Error('Cannot fetch more than 100 listings at a time.');
  }

  const params = new URLSearchParams({
    listing_ids: listingIds.join(','),
  });

  if (includes.length) {
    params.append('includes', includes.join(','));
  }

  return axios.get<EtsyList<EtsyListing>>(
    `/application/listings/batch`,
    getEtsyRequestAxiosConfig({accessToken, apiKey, params}),
  );
}
