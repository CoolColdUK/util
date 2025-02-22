import {Maybe} from '@coolcolduk/typescript-util';
import {EtsyListingItemDimensionUnitEnum} from '../enum/EtsyListingItemDimensionUnitEnum';
import {EtsyListingItemWeightEnum} from '../enum/EtsyListingItemWeightEnum';
import {EtsyListingTypeEnum} from '../enum/EtsyListingTypeEnum';
import {EtsyListingWhoMadeEnum} from '../enum/EtsyListingWhoMadeEnum';
import {EtsyListing} from './EtsyListing';

/**
 * The data required to create a draft listing.
 */
export interface CreateEtsyDraftListingRequest {
  /**
   * The positive non-zero number of products available for purchase in the listing.
   * Note: The listing quantity is the sum of available offering quantities.
   * You can request the quantities for individual offerings from the ListingInventory resource using the getListingInventory endpoint.
   */
  quantity: number;

  /**
   * The listing's title string. Valid title strings contain only letters, numbers,
   * punctuation marks, mathematical symbols, whitespace characters, ™, ©, and ®.
   */
  title: string;

  /**
   * A description string of the product for sale in the listing.
   */
  description: string;

  /**
   * The positive non-zero price of the product.
   */
  price: number;

  /**
   * An enumerated string indicating who made the product.
   * Helps buyers locate the listing under the Handmade heading.
   */
  who_made: EtsyListingWhoMadeEnum;

  /**
   * An enumerated string for the era in which the maker made the product in this listing.
   * Helps buyers locate the listing under the Vintage heading.
   */
  when_made: string;

  /**
   * The numerical taxonomy ID of the listing.
   */
  taxonomy_id: number;

  /**
   * The numeric ID of the shipping profile associated with the listing.
   * Required when listing type is physical.
   */
  shipping_profile_id?: Maybe<number>;

  /**
   * The numeric ID of the Return Policy.
   */
  return_policy_id?: Maybe<number>;

  /**
   * A list of material strings for materials used in the product.
   */
  materials?: Maybe<string[]>;

  /**
   * The numeric ID of the shop section for this listing.
   */
  shop_section_id?: Maybe<number>;

  /**
   * The minimum number of days required to process this listing.
   */
  processing_min?: Maybe<number>;

  /**
   * The maximum number of days required to process this listing.
   */
  processing_max?: Maybe<number>;

  /**
   * A comma-separated list of tag strings for the listing.
   */
  tags?: Maybe<string[]>;

  /**
   * An array of style strings for this listing, up to two styles allowed.
   */
  styles?: Maybe<string[]>;

  /**
   * The numeric weight of the product measured in units set in 'item_weight_unit'.
   */
  item_weight?: Maybe<number>;

  /**
   * The numeric length of the product measured in units set in 'item_dimensions_unit'.
   */
  item_length?: Maybe<number>;

  /**
   * The numeric width of the product measured in units set in 'item_dimensions_unit'.
   */
  item_width?: Maybe<number>;

  /**
   * The numeric height of the product measured in units set in 'item_dimensions_unit'.
   */
  item_height?: Maybe<number>;

  /**
   * The unit used to measure the weight of the product.
   */
  item_weight_unit?: Maybe<EtsyListingItemWeightEnum>;

  /**
   * The unit used to measure the dimensions of the product.
   */
  item_dimensions_unit?: Maybe<EtsyListingItemDimensionUnitEnum>;

  /**
   * When true, tags the listing as a supply product, else indicates it's a finished product.
   */
  is_supply?: Maybe<boolean>;

  /**
   * When true, a buyer may contact the seller for a customized order.
   */
  is_customizable?: Maybe<boolean>;

  /**
   * When true, this listing is personalizable.
   */
  is_personalizable?: Maybe<boolean>;

  /**
   * When true, this listing requires personalization.
   */
  personalization_is_required?: Maybe<boolean>;

  /**
   * Maximum length for the personalization message entered by the buyer.
   */
  personalization_char_count_max?: number;

  /**
   * Instructions for the buyer to enter the personalization.
   */
  personalization_instructions?: string;

  /**
   * Array of unique IDs of production partners.
   */
  production_partner_ids?: Maybe<number[]>;

  /**
   * Array of numeric image IDs of the images in a listing.
   */
  image_ids?: Maybe<number[]>;

  /**
   * When true, renews a listing for four months upon expiration.
   */
  should_auto_renew?: boolean;

  /**
   * When true, applicable shop tax rates apply to this listing at checkout.
   */
  is_taxable?: boolean;

  /**
   * An enumerated type string that indicates whether the listing is physical or digital.
   */
  type?: EtsyListingTypeEnum;
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
