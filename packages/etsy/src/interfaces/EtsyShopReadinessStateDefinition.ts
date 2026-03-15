import {EtsyReadinessStateEnum} from '../enum/EtsyReadinessStateEnum';

/**
 * Represents a processing profile (readiness state definition) for a product offering's readiness state and processing time.
 * @see https://developers.etsy.com/documentation/reference#operation/getShopReadinessStateDefinition
 */
export interface EtsyShopReadinessStateDefinition {
  /** The unique positive non-zero numeric ID for an Etsy Shop. */
  shop_id: number;
  /** The numeric ID of the readiness state definition (processing profile). */
  readiness_state_id: number;
  /** The readiness state: ready_to_ship or made_to_order. */
  readiness_state: EtsyReadinessStateEnum;
  /** The minimum number of days for processing a specific product. */
  min_processing_days: number;
  /** The maximum number of days for processing a specific product. */
  max_processing_days: number;
  /** Translated display label for processing days, e.g. "3 - 5 days". */
  processing_days_display_label: string;
}
