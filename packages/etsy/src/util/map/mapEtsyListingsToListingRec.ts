import {toObject} from '@coolcolduk/util';
import {EtsyListing} from '../../interfaces/EtsyListing';
import {EtsyListings} from '../../interfaces/EtsyListings';

export function mapEtsyListingsToListingRec(etsyListings: EtsyListings): Record<string, EtsyListing> {
  return toObject(etsyListings.results, 'listing_id');
}
