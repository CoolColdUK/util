// interfaces/UpdatedEtsyListingProperty.ts

import {Maybe} from '@coolcolduk/typescript-util';
import {z} from 'zod';

/**
 * Request data for updating a listing property on Etsy.
 * @see https://developers.etsy.com/documentation/reference/#operation/updateListingProperty
 */
export interface UpdateEtsyListingPropertyRequest {
  /**
   * An array of unique IDs of multiple Etsy listing property values.
   * Required.
   */
  value_ids: number[];

  /**
   * An array of value strings for multiple Etsy listing property values.
   * Required.
   */
  values: string[];

  /**
   * The numeric ID of a single Etsy.com measurement scale.
   * Optional, integer >= 1.
   */
  scale_id?: number;
}

export const zUpdateEtsyListingPropertyRequestSchema = z
  .object({
    value_ids: z
      .array(z.number().int().min(1, {message: 'Each value_id must be an integer >= 1'}))
      .min(1, {message: 'value_ids array must not be empty'}), // Required
    values: z.array(z.string()).min(1, {message: 'values array must not be empty'}), // Required
    scale_id: z.number().int().min(1, {message: 'scale_id must be an integer >= 1'}).optional(), // Optional
  })
  .strip()
  .refine((data) => data.value_ids.length === data.values.length, {
    message: 'value_ids and values arrays must have the same length',
    path: ['value_ids', 'values'],
  }) satisfies z.ZodType<UpdateEtsyListingPropertyRequest>;

/**
 * Response data from updating a listing property on Etsy.
 * @see https://developers.etsy.com/documentation/reference/#operation/updateListingProperty
 */
export interface EtsyListingProperty {
  /**
   * The numeric ID of the Property.
   */
  property_id: number;

  /**
   * The name of the Property.
   */
  property_name: Maybe<string>;

  /**
   * The numeric ID of the scale (if any).
   */
  scale_id?: Maybe<number>;

  /**
   * The label used to describe the chosen scale (if any).
   */
  scale_name?: Maybe<string>;

  /**
   * The numeric IDs of the Property values
   */
  value_ids: number[];

  /**
   * The Property values
   */
  values: string[];
}
