import {toObject} from '@coolcolduk/util';
import {EtsyListing} from '../../interfaces/EtsyListing';
import {EtsyList} from '../../interfaces/EtsyResponse';

/**
 * Convert etsy listings to Etsy listing record with listing id as key
 * @param etsyListings
 * @returns
 */
export function mapEtsyListingsToListingRec(etsyListings: EtsyList<EtsyListing>): Record<string, EtsyListing> {
  return toObject(etsyListings.results, 'listing_id');
}
