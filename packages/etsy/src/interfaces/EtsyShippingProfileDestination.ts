import {Maybe} from '@coolcolduk/typescript-util'; // Adjust import as needed
import {EtsyPrice} from './EtsyPrice'; // Adjust import as needed

/**
 * Represents a destination within an Etsy Shipping Profile.
 */
export interface EtsyShippingProfileDestination {
  /**
   * The numeric ID of the shipping profile destination
   * in the shipping profile associated with the listing.
   */
  shipping_profile_destination_id: number;

  /**
   * The numeric ID of the shipping profile.
   */
  shipping_profile_id: number;

  /**
   * The ISO code of the country from which the listing ships.
   * Example: "US" for the United States.
   */
  origin_country_iso: string;

  /**
   * The ISO code of the country to which the listing ships.
   * If null, the request sets destination to `destination_region`.
   * Required if `destination_region` is null or not provided.
   */
  destination_country_iso: Maybe<string>;

  /**
   * The code of the region to which the listing ships.
   * A region represents a set of countries.
   * Supported regions are:
   * - `"eu"`: European Union
   * - `"non_eu"`: Non-European Union (countries in Europe not in EU)
   * - `"none"`: Destination is specified by `destination_country_iso`.
   * Required if `destination_country_iso` is null or not provided.
   */
  destination_region: 'eu' | 'non_eu' | 'none';

  /**
   * The cost of shipping to this country/region alone,
   * measured in the store's default currency.
   */
  primary_cost: EtsyPrice;

  /**
   * The cost of shipping to this country/region with another item,
   * measured in the store's default currency.
   */
  secondary_cost: EtsyPrice;

  /**
   * The unique ID of a supported shipping carrier,
   * used to calculate an Estimated Delivery Date.
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
