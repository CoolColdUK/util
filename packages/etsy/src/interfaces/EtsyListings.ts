import {EtsyListing} from './EtsyListing';

/**
 * Response interface for `getListingsByShop`.
 */
export interface EtsyListings {
  count: number;
  results: EtsyListing[];
  pagination: {
    effective_limit: number;
    effective_offset: number;
    next_offset?: number;
    effective_page: number;
    next_page?: number;
    prev_page?: number;
  };
}
