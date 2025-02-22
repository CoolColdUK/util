import {Maybe} from '@coolcolduk/typescript-util';
import {EtsyListing} from './EtsyListing';

/**
 * The data required to create a draft listing.
 */
export interface CreateEtsyDraftListingRequest
  extends Pick<
    EtsyListing,
    | 'quantity'
    | 'title'
    | 'description'
    | 'price'
    | 'who_made'
    | 'when_made'
    | 'taxonomy_id'
    | 'shipping_profile_id'
    | 'return_policy_id'
    | 'materials'
    | 'shop_section_id'
    | 'processing_min'
    | 'processing_max'
    | 'tags'
    | 'style'
    | 'item_weight'
    | 'item_length'
    | 'item_width'
    | 'item_height'
    | 'item_weight_unit'
    | 'item_dimensions_unit'
    | 'is_supply'
    | 'is_customizable'
    | 'is_personalizable'
    | 'personalization_is_required'
    | 'personalization_char_count_max'
    | 'personalization_instructions'
    | 'should_auto_renew'
    | 'is_taxable'
    | 'listing_type'
  > {
  /**
   * Array of unique IDs of production partners.
   */
  production_partner_ids?: Maybe<number[]>;

  /**
   * Array of numeric image IDs of the images in a listing.
   */
  image_ids?: Maybe<number[]>;
}

/**
 * Defines the response schema for a draft listing created on Etsy.
 */
export type CreateEtsyDraftListingResponse = Omit<
  EtsyListing,
  | 'shipping_profile'
  | 'user'
  | 'shop'
  | 'images'
  | 'videos'
  | 'inventory'
  | 'production_partners'
  | 'skus'
  | 'translations'
  | 'views'
>;
