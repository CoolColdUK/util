import {Maybe} from '@coolcolduk/typescript-util'; // Adjust import as needed
import {EtsyShippingProfileUpgradeTypeEnum} from '../enum/EtsyShippingProfileUpgradeTypeEnum';
import {EtsyPrice} from './EtsyPrice'; // Adjust import as needed

/**
 * Represents an upgrade within an Etsy Shipping Profile.
 */
export interface EtsyShippingProfileUpgrade {
  /**
   * The numeric ID of the base shipping profile.
   */
  shipping_profile_id: number;

  /**
   * The numeric ID associated with a shipping upgrade.
   */
  upgrade_id: number;

  /**
   * Name for the shipping upgrade shown to shoppers at checkout, e.g., "USPS Priority".
   */
  upgrade_name: string;

  /**
   * The type of the shipping upgrade:
   * - `"0"`: Domestic
   * - `"1"`: International
   */
  type: EtsyShippingProfileUpgradeTypeEnum;

  /**
   * The positive non-zero numeric position in the images displayed in a listing,
   * with rank 1 images appearing in the left-most position in a listing.
   */
  rank: number;

  /**
   * The IETF language tag for the language of the shipping profile.
   * Examples: "de", "en", "es", "fr", "it", "ja", "nl", "pl", "pt".
   */
  language: string;

  /**
   * Additional cost of adding the shipping upgrade.
   */
  price: EtsyPrice;

  /**
   * Additional cost of adding the shipping upgrade for each additional item.
   */
  secondary_price: EtsyPrice;

  /**
   * The unique ID of a supported shipping carrier, used to calculate an Estimated Delivery Date.
   * Required with `mail_class` if `min_delivery_days` and `max_delivery_days` are null.
   */
  shipping_carrier_id: Maybe<number>;

  /**
   * The unique ID string of a shipping carrier's mail class,
   * used to calculate an estimated delivery date.
   * Required with `shipping_carrier_id` if `min_delivery_days` and `max_delivery_days` are null.
   */
  mail_class: Maybe<string>;

  /**
   * The minimum number of business days a buyer can expect
   * to wait to receive their purchased item once it has shipped.
   * Required with `max_delivery_days` if `mail_class` is null.
   * Must be between 1 and 45 days.
   */
  min_delivery_days: Maybe<number>;

  /**
   * The maximum number of business days a buyer can expect
   * to wait to receive their purchased item once it has shipped.
   * Required with `min_delivery_days` if `mail_class` is null.
   * Must be between 1 and 45 days.
   */
  max_delivery_days: Maybe<number>;
}
