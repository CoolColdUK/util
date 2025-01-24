import axios, {AxiosResponse} from 'axios';
import {EtsyListingItemDimensionUnitEnum, EtsyListingItemWeightEnum, EtsyListingTypeEnum} from '../../enum';
import {EtsyListingWhoMadeEnum} from '../../enum/EtsyListingWhoMadeEnum';
import {EtsyListing} from '../../interfaces/EtsyListing';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * The data required to create a draft listing.
 */
export interface CreateDraftListingRequest {
  /**
   * The positive non-zero number of products available for purchase in the listing.
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
  shipping_profile_id?: number;

  /**
   * The numeric ID of the Return Policy.
   */
  return_policy_id?: number;

  /**
   * A list of material strings for materials used in the product.
   */
  materials?: string[];

  /**
   * The numeric ID of the shop section for this listing.
   */
  shop_section_id?: number;

  /**
   * The minimum number of days required to process this listing.
   */
  processing_min?: number;

  /**
   * The maximum number of days required to process this listing.
   */
  processing_max?: number;

  /**
   * A comma-separated list of tag strings for the listing.
   */
  tags?: string[];

  /**
   * An array of style strings for this listing, up to two styles allowed.
   */
  styles?: string[];

  /**
   * The numeric weight of the product measured in units set in 'item_weight_unit'.
   */
  item_weight?: number;

  /**
   * The numeric length of the product measured in units set in 'item_dimensions_unit'.
   */
  item_length?: number;

  /**
   * The numeric width of the product measured in units set in 'item_dimensions_unit'.
   */
  item_width?: number;

  /**
   * The numeric height of the product measured in units set in 'item_dimensions_unit'.
   */
  item_height?: number;

  /**
   * The unit used to measure the weight of the product.
   */
  item_weight_unit?: EtsyListingItemWeightEnum;

  /**
   * The unit used to measure the dimensions of the product.
   */
  item_dimensions_unit?: EtsyListingItemDimensionUnitEnum;

  /**
   * When true, tags the listing as a supply product, else indicates it's a finished product.
   */
  is_supply?: boolean;

  /**
   * When true, a buyer may contact the seller for a customized order.
   */
  is_customizable?: boolean;

  /**
   * When true, this listing is personalizable.
   */
  is_personalizable?: boolean;

  /**
   * When true, this listing requires personalization.
   */
  personalization_is_required?: boolean;

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
  production_partner_ids?: number[];

  /**
   * Array of numeric image IDs of the images in a listing.
   */
  image_ids?: number[];

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
  type: EtsyListingTypeEnum;
}

/**
 * Defines the response schema for a draft listing created on Etsy.
 */
export type EtsyListingDraftResponse = Omit<
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

/**
 * Creates a physical draft listing product in a shop on the Etsy channel.
 * @requires scope listings_w
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token for authorization.
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop.
 * @param data - The data required to create a draft listing.
 * @returns Created draft listing details as a promise of EtsyListingDraftResponse.
 */
export function createDraftListing(
  apiKey: string,
  accessToken: string,
  shopId: number,
  data: CreateDraftListingRequest,
): Promise<AxiosResponse<EtsyListingDraftResponse>> {
  return axios.post<EtsyListingDraftResponse>(
    `/application/shops/${shopId}/listings/draft`,
    JSON.stringify(data),
    getEtsyRequestAxiosConfig({accessToken, apiKey, contentType: 'application/x-www-form-urlencoded'}),
  );
}
