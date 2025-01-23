import {EtsyProduct} from './EtsyProduct';

/**
 * Represents the inventory details of an Etsy listing.
 */
export interface EtsyListingInventory {
  /**
   * A JSON array of products available in a listing, even if only one product.
   * All field names in the JSON blobs are lowercase.
   */
  products: EtsyProduct[];

  /**
   * An array of unique listing property ID integers for the properties that change product prices, if any.
   * Example: Contains the property ID for size if specific prices are charged for different sizes.
   */
  price_on_property: number[];

  /**
   * An array of unique listing property ID integers for the properties that change the quantity of the products, if any.
   * Example: Contains the property ID for color if specific quantities are stocked for different colors.
   */
  quantity_on_property: number[];

  /**
   * An array of unique listing property ID integers for the properties that change the product SKU, if any.
   * Example: Contains the property ID for color if specific SKUs are used for different colors.
   */
  sku_on_property: number[];
}
