import {toObject} from '@coolcolduk/util';
import {EtsyListing} from '../../interfaces/EtsyListing';
import {EtsyListings} from '../../interfaces/EtsyListings';

/**
 * Convert etsy listings to Etsy listing record with listing id as key
 * @param etsyListings
 * @returns
 */
export function mapEtsyListingsToListingRec(etsyListings: EtsyListings): Record<string, EtsyListing> {
  return toObject(etsyListings.results, 'listing_id');
}
