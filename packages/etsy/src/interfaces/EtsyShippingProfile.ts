import {Maybe} from '@coolcolduk/typescript-util'; // Adjust import as needed
import {EtsyShippingProfileTypeEnum} from '../enum/EtsyShippingProfileTypeEnum';
import {EtsyShippingProfileDestination} from './EtsyShippingProfileDestination';
import {EtsyShippingProfileUpgrade} from './EtsyShippingProfileUpgrade ';

/**
 * Represents an Etsy Shipping Profile.
 */
export interface EtsyShippingProfile {
  /**
   * The numeric ID of the shipping profile.
   */
  shipping_profile_id: number;

  /**
   * The name string of this shipping profile.
   */
  title: Maybe<string>;

  /**
   * The numeric ID for the user who owns the shipping profile.
   */
  user_id: number;

  /**
   * The minimum number of days for processing the listing.
   */
  min_processing_days: Maybe<number>;

  /**
   * The maximum number of days for processing the listing.
   */
  max_processing_days: Maybe<number>;

  /**
   * Translated display label string for processing days.
   */
  processing_days_display_label: string;

  /**
   * The ISO code of the country from which the listing ships.
   */
  origin_country_iso: string;

  /**
   * When true, someone deleted this shipping profile.
   */
  is_deleted: boolean;

  /**
   * A list of shipping profile destinations available for this shipping profile.
   */
  shipping_profile_destinations: EtsyShippingProfileDestination[];

  /**
   * A list of shipping profile upgrades available for this shipping profile.
   */
  shipping_profile_upgrades: EtsyShippingProfileUpgrade[];

  /**
   * The postal code string for the location from which the listing ships.
   * Required if the `origin_country_iso` supports postal codes.
   */
  origin_postal_code: Maybe<string>;

  /**
   * The type of shipping profile: "manual" or "calculated".
   */
  profile_type: EtsyShippingProfileTypeEnum;

  /**
   * The domestic handling fee added to buyer's shipping total.
   * Only available for calculated shipping profiles.
   */
  domestic_handling_fee: number;

  /**
   * The international handling fee added to buyer's shipping total.
   * Only available for calculated shipping profiles.
   */
  international_handling_fee: number;
}
