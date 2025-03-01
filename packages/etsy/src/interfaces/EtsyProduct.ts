import {z} from 'zod';
import {EtsyProductOffering, zEtsyProductOffering} from './EtsyProductOffering';
import {EtsyProductPropertyValue, zEtsyProductPropertyValue} from './EtsyProductPropertyValue';

/**
 * Represents a product in an Etsy listing's inventory.
 */
export interface EtsyProduct {
  /**
   * The unique identifier for the product.
   */
  product_id: number;

  /**
   * The stock keeping unit (SKU) for the product.
   */
  sku: string;

  /**
   * When true, this product is marked as deleted.
   */
  is_deleted: boolean;

  /**
   * An array of offerings available for the product.
   */
  offerings: EtsyProductOffering[];

  /**
   * A list of property values associated with the product.
   */
  property_values: EtsyProductPropertyValue[];
}

export const zEtsyProduct = z.object({
  product_id: z.number().min(1).int(),
  sku: z.string(),
  is_deleted: z.boolean(),
  offerings: z.array(zEtsyProductOffering),
  property_values: z.array(zEtsyProductPropertyValue),
}) satisfies z.ZodType<EtsyProduct>;
