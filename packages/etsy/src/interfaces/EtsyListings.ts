import {EtsyListing} from './EtsyListing';

/**
 * Multiple etsy listing results
 */
export interface EtsyListings {
  count: number;
  results: EtsyListing[];
}
