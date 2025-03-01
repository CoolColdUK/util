import {boolean, number, object, ZodType} from 'zod';
import {EtsyPrice, zEtsyPrice} from './EtsyPrice';

/**
 * Represents an offering for a product in an Etsy listing's inventory.
 */
export interface EtsyProductOffering {
  /**
   * The unique identifier for the offering.
   */
  offering_id: number;

  /**
   * The available quantity of the offering.
   */
  quantity: number;

  /**
   * When true, this offering is enabled.
   */
  is_enabled: boolean;

  /**
   * When true, this offering is marked as deleted.
   */
  is_deleted: boolean;

  /**
   * The price of the offering.
   */
  price: EtsyPrice;
}

export const zEtsyProductOffering = object({
  offering_id: number().int().min(1),
  quantity: number().int().min(0),
  is_enabled: boolean(),
  is_deleted: boolean(),
  price: zEtsyPrice,
}) satisfies ZodType<EtsyProductOffering>;
