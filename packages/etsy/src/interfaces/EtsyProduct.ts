import {Maybe} from '@coolcolduk/typescript-util';
import {z} from 'zod';
import {
  EtsyProductOffering,
  EtsyProductOfferingRequest,
  zEtsyProductOffering,
  zEtsyProductOfferingRequest,
} from './EtsyProductOffering';
import {
  EtsyProductPropertyValue,
  EtsyProductPropertyValueRequest,
  zEtsyProductPropertyValue,
  zEtsyProductPropertyValueRequest,
} from './EtsyProductPropertyValue';

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

/**
 * etsy product in a request
 */
export interface EtsyProductRequest {
  sku?: Maybe<string>;
  property_values?: EtsyProductPropertyValueRequest[];
  offerings: EtsyProductOfferingRequest[];
}

export const zEtsyProductRequest = z.object({
  sku: zEtsyProduct.shape.sku.nullable().optional(),
  property_values: z.array(zEtsyProductPropertyValueRequest).optional(),
  offerings: z.array(zEtsyProductOfferingRequest),
}) satisfies z.ZodType<EtsyProductRequest>;
