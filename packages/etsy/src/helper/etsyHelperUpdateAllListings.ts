import {mapPromiseFnSeries} from '@coolcolduk/util';
import {omit} from 'lodash';
import {UpdatedEtsyListing} from '../interfaces/UpdatedEtsyListing';
import {UpdateEtsyListingRequestWithId} from '../interfaces/UpdateEtsyListingRequestWithId';
import {updateEtsyListing} from '../request/listing/updateEtsyListing';

/**
 * Update multiple listings for a given shop.
 * @param apiKey - Etsy API key
 * @param accessToken - Etsy access token
 * @param shopId - Etsy shop ID
 * @param listings - Listings to update
 * @returns Updated listings
 */
export async function etsyHelperUpdateAllListings(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listings: UpdateEtsyListingRequestWithId[],
): Promise<UpdatedEtsyListing[]> {
  const listingData = listings.map((l) => ({id: l.listing_id, data: omit(l, 'listing_id')}));
  const result = await mapPromiseFnSeries(listingData, (listing) =>
    updateEtsyListing(apiKey, accessToken, shopId, listing.id, listing.data),
  );
  return result.map((r) => r.data);
}
