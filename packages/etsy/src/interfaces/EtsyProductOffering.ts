import {z, ZodType} from 'zod';
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

export const zEtsyProductOffering = z.object({
  offering_id: z.number().int().min(1),
  quantity: z.number().int().min(0),
  is_enabled: z.boolean(),
  is_deleted: z.boolean(),
  price: zEtsyPrice,
}) satisfies ZodType<EtsyProductOffering>;

export interface EtsyProductOfferingRequest extends Pick<EtsyProductOffering, 'quantity' | 'is_enabled'> {
  price: number;
}

export const zEtsyProductOfferingRequest = zEtsyProductOffering
  .pick({
    quantity: true,
    is_enabled: true,
  })
  .merge(z.object({price: z.number().min(0)})) satisfies ZodType<EtsyProductOfferingRequest>;
