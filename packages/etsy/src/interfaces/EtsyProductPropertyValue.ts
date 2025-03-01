import {Maybe, NonNullableBy, PartialBy} from '@coolcolduk/typescript-util';
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
  property_name: z.string().nullable(), // nullable needs to be last for unwrap to work
  scale_id: z.number().int().min(1).nullable(),
  scale_name: z.string().nullable(),
  value_ids: z.array(z.number().int().min(1)),
  values: z.array(z.string()),
}) satisfies z.ZodType<EtsyProductPropertyValue>;

export type EtsyProductPropertyValueRequest = NonNullableBy<
  PartialBy<Omit<EtsyProductPropertyValue, 'scale_name'>, 'scale_id' | 'property_name'>,
  'property_name'
>;

export const zEtsyProductPropertyValueRequest = zEtsyProductPropertyValue
  .omit({scale_name: true, property_name: true})
  .merge(
    z.object({
      property_name: zEtsyProductPropertyValue.shape.property_name.optional().unwrap(),
      scale_id: zEtsyProductPropertyValue.shape.scale_id.optional(),
    }),
  ) satisfies z.ZodType<EtsyProductPropertyValueRequest>;
