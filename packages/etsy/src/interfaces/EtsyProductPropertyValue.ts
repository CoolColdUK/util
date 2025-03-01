import {Maybe} from '@coolcolduk/typescript-util';
import {z} from 'zod';

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
  property_name: Maybe<string>;

  /**
   * The unique identifier for the property's scale, if applicable.
   */
  scale_id: Maybe<number>;

  /**
   * The name of the property's scale, if applicable.
   */
  scale_name: Maybe<string>;

  /**
   * A list of unique identifiers for the property's values.
   */
  value_ids: number[];

  /**
   * A list of value strings for the property.
   */
  values: string[];
}

export const zEtsyProductPropertyValue = z.object({
  property_id: z.number().int().min(1),
  property_name: z.string().nullable(),
  scale_id: z.number().int().min(1).nullable(),
  scale_name: z.string().nullable(),
  value_ids: z.array(z.number().int().min(1)).nonempty({message: 'value_ids array must not be empty'}),
  values: z.array(z.string()).nonempty({message: 'values array must not be empty'}),
}) satisfies z.ZodType<EtsyProductPropertyValue>;
