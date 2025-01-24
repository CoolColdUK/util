import {Maybe} from '@coolcolduk/typescript-util';
import {EtsyListingItemDimensionUnitEnum} from '../enum/EtsyListingItemDimensionUnitEnum';
import {EtsyListingItemWeightEnum} from '../enum/EtsyListingItemWeightEnum';
import {EtsyListingStateEnum} from '../enum/EtsyListingStateEnum';
import {EtsyListingTypeEnum} from '../enum/EtsyListingTypeEnum';
import {EtsyListingWhoMadeEnum} from '../enum/EtsyListingWhoMadeEnum';
import {EtsyListingImage} from './EtsyListingImage';
import {EtsyListingInventory} from './EtsyListingInventory ';
import {EtsyListingVideo} from './EtsyListingVideo';
import {EtsyPrice} from './EtsyPrice';
import {EtsyProductionPartner} from './EtsyProductionPartner';
import {EtsyShippingProfile} from './EtsyShippingProfile';
import {EtsyShop} from './EtsyShop';
import {EtsyTranslation} from './EtsyTranslation';
import {EtsyUser} from './EtsyUser';

/**
 * Represents an Etsy product listing.
 */
export interface EtsyListing {
  /**
   * The numeric ID for the listing associated with this transaction.
   */
  listing_id: number;

  /**
   * The numeric ID for the user posting the listing.
   */
  user_id: number;

  /**
   * The unique positive non-zero numeric ID for an Etsy Shop.
   */
  shop_id: number;

  /**
   * The listing's title string.
   */
  title: string;

  /**
   * A description string of the product for sale in the listing.
   */
  description: string;

  /**
   * The state of the listing.
   * Enum: "active" | "inactive" | "sold_out" | "draft" | "expired".
   */
  state: EtsyListingStateEnum;

  /**
   * The listing's creation time, in epoch seconds.
   */
  creation_timestamp: number;

  /**
   * The time of the last update to the listing, in epoch seconds.
   */
  last_modified_timestamp: number;

  /**
   * The time of the last update to the listing, in epoch seconds.
   */
  updated_timestamp: number;

  /**
   * The number of products available for purchase in the listing.
   */
  quantity: number;

  /**
   * The numeric ID of a section in a specific Etsy shop.
   * Maybe if not applicable.
   */
  shop_section_id: Maybe<number>;

  /**
   * The rank of the listing in the featured listings of the shop.
   */
  featured_rank: number;

  /**
   * The full URL to the listing's page on Etsy.
   */
  url: string;

  /**
   * The number of users who marked this listing a favorite.
   */
  num_favorers: number;

  /**
   * When true, applicable shop tax rates do not apply to this listing at checkout.
   */
  non_taxable: boolean;

  /**
   * When true, applicable shop tax rates apply to this listing at checkout.
   */
  is_taxable: boolean;

  /**
   * When true, a buyer may contact the seller for a customized order.
   */
  is_customizable: boolean;

  /**
   * When true, this listing is personalizable.
   * Maybe if not applicable.
   */
  is_personalizable: Maybe<boolean>;

  /**
   * When true, this listing requires personalization.
   * Maybe if not applicable.
   */
  personalization_is_required: Maybe<boolean>;

  /**
   * The maximum character count for the personalization message.
   * Maybe if not applicable.
   */
  personalization_char_count_max: Maybe<number>;

  /**
   * Instructions for personalization if required.
   * Maybe if not applicable.
   */
  personalization_instructions: Maybe<string>;

  /**
   * Defines whether the listing is a physical product, digital download, or both.
   * Enum: "physical" | "download" | "both".
   */
  listing_type: EtsyListingTypeEnum;

  /**
   * A comma-separated list of tag strings for the listing.
   * Maybe if not applicable.
   */
  tags: Maybe<string[]>;

  /**
   * A list of material strings used in the product.
   * Maybe if not applicable.
   */
  materials: Maybe<string[]>;

  /**
   * The numeric ID of the shipping profile associated with the listing.
   * Maybe if not applicable (only for physical items).
   */
  shipping_profile_id: Maybe<number>;

  /**
   * The numeric ID of the Return Policy.
   * Maybe if not applicable.
   */
  return_policy_id: Maybe<number>;

  /**
   * The minimum number of days required to process this listing.
   * Maybe if not applicable.
   */
  processing_min: Maybe<number>;

  /**
   * The maximum number of days required to process this listing.
   * Maybe if not applicable.
   */
  processing_max: Maybe<number>;

  /**
   * Indicates who made the product.
   * Enum: "i_did" | "someone_else" | "collective".
   * Maybe if not applicable.
   */
  who_made: Maybe<EtsyListingWhoMadeEnum>;

  /**
   * The era in which the product was made.
   * Enum: Various decade strings (e.g., "2020_2025", "1990s", etc.).
   * Maybe if not applicable.
   */
  when_made: Maybe<string>;

  /**
   * When true, tags the listing as a supply product.
   * Maybe if not applicable.
   */
  is_supply: Maybe<boolean>;

  /**
   * The numeric weight of the product.
   * Maybe if not applicable.
   */
  item_weight: Maybe<number>;

  /**
   * The units used to measure the weight of the product.
   * Maybe if not applicable.
   */
  item_weight_unit: Maybe<EtsyListingItemWeightEnum>;

  /**
   * The numeric length of the product.
   * Maybe if not applicable.
   */
  item_length: Maybe<number>;

  /**
   * The numeric width of the product.
   * Maybe if not applicable.
   */
  item_width: Maybe<number>;

  /**
   * The numeric height of the product.
   * Maybe if not applicable.
   */
  item_height: Maybe<number>;

  /**
   * The units used to measure the dimensions of the product.
   * Maybe if not applicable.
   */
  item_dimensions_unit: Maybe<EtsyListingItemDimensionUnitEnum>;

  /**
   * When true, this is a private listing intended for a specific buyer.
   */
  is_private: boolean;

  /**
   * The styles associated with the listing.
   * Maybe if not applicable.
   */
  style: Maybe<string[]>;

  /**
   * The associated file data for a digital listing.
   * Maybe if not applicable.
   */
  file_data: Maybe<string>;

  /**
   * When true, the listing has variations (e.g., different sizes or colors).
   */
  has_variations: boolean;

  /**
   * When true, the listing should auto-renew after expiration.
   */
  should_auto_renew: boolean;

  /**
   * The IETF language tag for the default language of the listing (e.g., "en", "fr").
   * Maybe if not applicable.
   */
  language: Maybe<string>;

  /**
   * The price details for the listing.
   */
  price: EtsyPrice;

  /**
   * The numeric taxonomy ID of the listing.
   * Maybe if not applicable.
   */
  taxonomy_id: Maybe<number>;

  /**
   * The shipping profile data associated with the listing.
   * Maybe if not applicable.
   */
  shipping_profile: Maybe<EtsyShippingProfile>;

  /**
   * The user information associated with the listing.
   * Maybe if not applicable.
   */
  user: Maybe<EtsyUser>;

  /**
   * The shop information associated with the listing.
   * Maybe if not applicable.
   */
  shop: Maybe<EtsyShop>;

  /**
   * A list of images associated with the listing.
   */
  images: EtsyListingImage[];

  /**
   * A list of videos associated with the listing.
   */
  videos: EtsyListingVideo[];

  /**
   * The inventory information associated with the listing.
   * Maybe if not applicable.
   */
  inventory: Maybe<EtsyListingInventory>;

  /**
   * A list of production partners associated with the shop.
   */
  production_partners: EtsyProductionPartner[];

  /**
   * A list of SKU strings for the listing.
   */
  skus: string[];

  /**
   * The translations for the listing in different languages.
   * Maybe if not applicable.
   */
  translations: Maybe<Record<string, EtsyTranslation>>;

  /**
   * The number of times the listing has been viewed.
   */
  views: number;
}
