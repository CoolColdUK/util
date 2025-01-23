/**
 * Represents a property value associated with a product.
 */
export interface EtsyProductPropertyValue {
  /**
   * The unique identifier for the property.
   */
  property_id: number;

  /**
   * The name of the property.
   */
  property_name: string;

  /**
   * The unique identifier for the property's scale, if applicable.
   */
  scale_id: number;

  /**
   * The name of the property's scale, if applicable.
   */
  scale_name: string;

  /**
   * A list of unique identifiers for the property's values.
   */
  value_ids: number[];

  /**
   * A list of value strings for the property.
   */
  values: string[];
}
