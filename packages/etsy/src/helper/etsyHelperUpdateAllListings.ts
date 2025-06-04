import {mapPromiseFnSeries} from '@coolcolduk/util';
import {UpdateEtsyListingRequest} from '../interfaces/UpdatedEtsyListing';
import {updateEtsyListing} from '../request/listing/updateEtsyListing';

/**
 * Update multiple listings for a given shop.
 * @param apiKey - Etsy API key
 * @param accessToken - Etsy access token
 * @param shopId - Etsy shop ID
 * @param listings - Listings to update
 * @returns Updated listings
 */
export function etsyHelperUpdateAllListings(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listings: {id: number; data: UpdateEtsyListingRequest}[],
) {
  return mapPromiseFnSeries(listings, (listing) =>
    updateEtsyListing(apiKey, accessToken, shopId, listing.id, listing.data),
  );
}
