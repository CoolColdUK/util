// interfaces/EtsyListingInventory.ts

import {Maybe, NullableBy} from '@coolcolduk/typescript-util';
import {z} from 'zod';
import {EtsyListing} from './EtsyListing';
import {EtsyProduct, zEtsyProduct} from './EtsyProduct';

/**
 * Represents the inventory data for an Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/getListingInventory
 */
export interface EtsyListingInventory {
  /**
   * An array of products available in the listing.
   */
  products: EtsyProduct[];

  /**
   * An array of property IDs that affect product prices (if any).
   */
  price_on_property: number[];

  /**
   * An array of property IDs that affect product quantities (if any).
   */
  quantity_on_property: number[];

  /**
   * An array of property IDs that affect product SKUs (if any).
   */
  sku_on_property: number[];

  /**
   * An enumerated string that attaches a valid association. Default value is null.
   */
  listing: Maybe<EtsyListing>;
}

/**
 * Request data for updating the inventory of an Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/updateListingInventory
 */
export interface UpdateEtsyListingInventoryRequest {
  /**
   * A JSON array of products available in a listing, even if only one product.
   * Required.
   */
  products: NullableBy<Pick<EtsyProduct, 'offerings' | 'property_values' | 'sku'>, 'sku'>[];

  /**
   * An array of unique listing property ID integers for the properties that change product prices (optional).
   */
  price_on_property: number[];

  /**
   * An array of unique listing property ID integers for the properties that change product quantities (optional).
   */
  quantity_on_property: number[];

  /**
   * An array of unique listing property ID integers for the properties that change product SKUs (optional).
   */
  sku_on_property: number[];
}

export const zUpdateEtsyListingInventoryRequestSchema = z.object({
  products: z
    .array(
      zEtsyProduct
        .pick({offerings: true, property_values: true})
        .merge(z.object({sku: zEtsyProduct.shape.sku.nullable()})),
    )
    .nonempty({message: 'products array must not be empty'}),
  price_on_property: z.array(z.number().int().min(1)),
  quantity_on_property: z.array(z.number().int().min(1)),
  sku_on_property: z.array(z.number().int().min(1)),
}) satisfies z.ZodType<UpdateEtsyListingInventoryRequest>;
