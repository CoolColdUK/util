import {UpdateEtsyListingRequest} from './UpdatedEtsyListing';

export interface UpdateEtsyListingRequestWithId extends UpdateEtsyListingRequest {
  listing_id: number;
}
