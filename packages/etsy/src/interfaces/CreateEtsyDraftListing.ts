import {Maybe} from '@coolcolduk/typescript-util';
import {z, ZodType} from 'zod';
import {EtsyListingItemDimensionUnitEnum} from '../enum/EtsyListingItemDimensionUnitEnum';
import {EtsyListingItemWeightEnum} from '../enum/EtsyListingItemWeightEnum';
import {EtsyListingStateEnum} from '../enum/EtsyListingStateEnum';
import {EtsyListingTypeEnum} from '../enum/EtsyListingTypeEnum';
import {EtsyListingWhoMadeEnum} from '../enum/EtsyListingWhoMadeEnum';
import {EtsyListing} from './EtsyListing';
import {zEtsyPrice} from './EtsyPrice';

/**
 * The data required to create a draft listing.
 */
export interface CreateEtsyDraftListingRequest
  extends Pick<
    EtsyListing,
    | 'quantity'
    | 'title'
    | 'description'
    | 'price'
    | 'who_made'
    | 'when_made'
    | 'taxonomy_id'
    | 'shipping_profile_id'
    | 'return_policy_id'
    | 'materials'
    | 'shop_section_id'
    | 'processing_min'
    | 'processing_max'
    | 'tags'
    | 'style'
    | 'item_weight'
    | 'item_length'
    | 'item_width'
    | 'item_height'
    | 'item_weight_unit'
    | 'item_dimensions_unit'
    | 'is_supply'
    | 'is_customizable'
    | 'is_personalizable'
    | 'personalization_is_required'
    | 'personalization_char_count_max'
    | 'personalization_instructions'
    | 'should_auto_renew'
    | 'is_taxable'
    | 'listing_type'
  > {
  /**
   * Array of unique IDs of production partners.
   */
  production_partner_ids?: Maybe<number[]>;

  /**
   * Array of numeric image IDs of the images in a listing.
   */
  image_ids?: Maybe<number[]>;
}

/**
 * Zod schema for validating an UpdateEtsyListingRequest.
 */
export const zCreateEtsyDraftListingRequestSchema = z.object({
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

  processing_min: z.number().int().min(0).nullable(),
  processing_max: z.number().int().min(0).nullable(),
  quantity: z.number().int().min(0),
  price: zEtsyPrice,
  style: z.array(z.string()).nullable(),
  is_customizable: z.boolean(),
}) satisfies ZodType<CreateEtsyDraftListingRequest>;

/**
 * Defines the response schema for a draft listing created on Etsy.
 */
export type CreateEtsyDraftListingResponse = Omit<
  EtsyListing,
  | 'shipping_profile'
  | 'user'
  | 'shop'
  | 'images'
  | 'videos'
  | 'inventory'
  | 'production_partners'
  | 'skus'
  | 'translations'
  | 'views'
>;
