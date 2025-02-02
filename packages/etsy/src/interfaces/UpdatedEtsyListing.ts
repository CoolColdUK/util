import {Maybe, NullableBy} from '@coolcolduk/typescript-util';
import {z, ZodType} from 'zod';
import {EtsyListingItemDimensionUnitEnum} from '../enum/EtsyListingItemDimensionUnitEnum';
import {EtsyListingItemWeightEnum} from '../enum/EtsyListingItemWeightEnum';
import {EtsyListingStateEnum} from '../enum/EtsyListingStateEnum';
import {EtsyListingTypeEnum} from '../enum/EtsyListingTypeEnum';
import {EtsyListingWhoMadeEnum} from '../enum/EtsyListingWhoMadeEnum';
import {EtsyListing} from './EtsyListing';

/**
 * Interface representing an update request for an Etsy listing.
 */
export interface UpdateEtsyListingRequest
  extends NullableBy<
    Pick<
      EtsyListing,
      | 'title'
      | 'description'
      | 'materials'
      | 'should_auto_renew'
      | 'shipping_profile_id'
      | 'return_policy_id'
      | 'shop_section_id'
      | 'item_weight'
      | 'item_length'
      | 'item_width'
      | 'item_height'
      | 'item_weight_unit'
      | 'item_dimensions_unit'
      | 'is_taxable'
      | 'taxonomy_id'
      | 'tags'
      | 'who_made'
      | 'when_made'
      | 'featured_rank'
      | 'is_personalizable'
      | 'personalization_is_required'
      | 'personalization_char_count_max'
      | 'personalization_instructions'
      | 'state'
      | 'is_supply'
      | 'listing_type'
    >,
    'featured_rank'
  > {
  /**
   * An array of numeric image IDs associated with the listing (up to 10 images).
   */
  image_ids?: number[];

  /**
   * An array of production partner IDs associated with the listing.
   */
  production_partner_ids?: Maybe<number[]>;
}

/**
 * Zod schema for validating an UpdateEtsyListingRequest.
 */
export const zUpdateEtsyListingRequestSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  materials: z.array(z.string()).nullable(),
  should_auto_renew: z.boolean(),
  shipping_profile_id: z.number().int().positive().nullable(),
  return_policy_id: z.number().int().positive().nullable(),
  shop_section_id: z.number().int().nullable(),
  item_weight: z.number().positive().nullable(),
  item_length: z.number().positive().nullable(),
  item_width: z.number().positive().nullable(),
  item_height: z.number().positive().nullable(),
  item_weight_unit: z.nativeEnum(EtsyListingItemWeightEnum).nullable(),
  item_dimensions_unit: z.nativeEnum(EtsyListingItemDimensionUnitEnum).nullable(),
  is_taxable: z.boolean(),
  taxonomy_id: z.number().int().positive(),
  tags: z.array(z.string()).nullable(),
  who_made: z.nativeEnum(EtsyListingWhoMadeEnum),
  when_made: z.string(),
  /** somehow data from end point does not match documentation */
  featured_rank: z.number().int().min(-1).nullable(),
  is_personalizable: z.boolean().nullable(),
  personalization_is_required: z.boolean().nullable(),
  personalization_char_count_max: z.number().int().nullable(),
  personalization_instructions: z.string().nullable(),
  state: z.nativeEnum(EtsyListingStateEnum),
  is_supply: z.boolean(),
  listing_type: z.nativeEnum(EtsyListingTypeEnum),
  image_ids: z.array(z.number().int()).max(10).optional(),
  production_partner_ids: z.array(z.number().int()).nullable().optional(),
}) satisfies ZodType<UpdateEtsyListingRequest>;

export interface UpdatedEtsyListing
  extends Omit<EtsyListing, 'user' | 'shop' | 'translations' | 'inventory' | 'production_partners'> {
  /**
   * The timestamp of when the listing was last updated, in ISO 8601 format.
   */
  updated_at: string;

  /**
   * The timestamp of when the listing was initially created, in ISO 8601 format.
   */
  created_timestamp: string;

  /**
   * The timestamp of when the listing will expire, in ISO 8601 format.
   */
  ending_timestamp: string;

  /**
   * The original creation timestamp of the listing, in ISO 8601 format.
   */
  original_creation_timestamp: string;

  /**
   * The timestamp of the last state change, in ISO 8601 format.
   */
  state_timestamp: string;
}
